"use client";

import { SocialButton } from "@/components/common";
import { ImGoogle, ImFacebook } from "react-icons/im";
import { continueWithFacebook, continueWithGoogle } from "@/utils";

export default function SocialButtons() {
  return (
    <div className="flex flex-col items-center gap-2 mt-5 ">
      <SocialButton provider="google" onClick={continueWithGoogle}>
        <ImGoogle className="text-green-600" />
        Sign in with Google
      </SocialButton>
      <SocialButton provider="facebook" onClick={continueWithFacebook}>
        <ImFacebook />
        Facebook
      </SocialButton>
    </div>
  );
}
