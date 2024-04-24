"use client";

import { useSocialAuthenticationMutation } from "@/redux/features/authApiSlice";
import { useSocialAuth } from "@/hooks";
import { Spinner } from "@/components/common";

export default function Page() {
  const [facebookAuth] = useSocialAuthenticationMutation();

  useSocialAuth(facebookAuth, "facebook");
  return (
    <div className="my-8 ">
      <Spinner lg />
    </div>
  );
}
