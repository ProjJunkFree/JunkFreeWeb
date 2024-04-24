"use client";

import { useSocialAuthenticationMutation } from "@/redux/features/authApiSlice";
import { useSocialAuth } from "@/hooks";
import { Spinner } from "@/components/common";

export default function Page() {
  const [googleAuth] = useSocialAuthenticationMutation();

  useSocialAuth(googleAuth, "google-oauth2");
  return (
    <div className="my-8 flex justify-center">
      <Spinner lg />
    </div>
  );
}
