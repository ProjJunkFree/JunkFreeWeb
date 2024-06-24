// Social auth handling google and facebook
// routes nga localhost:8000/api/v1/o/facebook/?redirect_uri=http://localhost:3000/auth/facebook

import { toast } from "react-toastify";

export default async function continueWithSocialAuth(provider, redirect) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_HOST;
    const redirectUri =
      process.env.NODE_ENV === "production"
        ? `${baseUrl}/auth/${provider}`
        : `http://localhost:3000/auth/${provider}`;

    const url = `${baseUrl}/api/v1/o/${provider}/?redirect_uri=${encodeURIComponent(
      redirectUri
    )}`;

    console.log("Fetching URL:", url);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Received data:", data);
      if (typeof window !== "undefined") {
        window.location.replace(data.authorization_url);
      }
    } else {
      const errorData = await response.json();
      console.error("Error response:", errorData);
      const errorMessage =
        errorData.detail ||
        `Something went wrong on signing in with ${provider}`;
      toast.error(errorMessage);
    }
  } catch (error) {
    console.error("Error fetching social auth URL:", error);
    toast.error("Failed to connect to the server. Please try again later.");
  }
}
