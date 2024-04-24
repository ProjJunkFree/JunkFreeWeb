// Social auth handling google and facebook
// routes nga localhost:8000/api/v1/o/facebook/?redirect_uri=http://localhost:3000/auth/facebook

import { toast } from "react-toastify";
export default async function continueWithSocialAuth(provider, redirect) {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_HOST
    }/api/v1/o/${provider}/?redirect_uri=${
      process.env.NODE_ENV !== "production"
        ? process.env.NEXT_PUBLIC_REDIRECT_URL
        : "http://localhost:3000"
    }/auth/${redirect}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      credentials: "include",
    });
    const data = await response.json();
    console.log(data.authorization_url);
    if (response.status === 200 && typeof window !== "undefined") {
      window.location.replace(data.authorization_url);
    } else {
      toast.error(`Something went wrong on signing in with ${redirect}`);
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
}
