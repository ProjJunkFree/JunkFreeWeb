import Link from "next/link";
import { LoginForm } from "@/components/forms";
import { SocialButtons } from "@/components/common";
// if no cursor
//  install @tailwindcss/forms
// npm i --save @tailwindcss/forms

export const metadata = {
  // para sa title sa route nga /auth/register
  title: "JunkFree | Login",
  description: "JunkFree Login Page",
};

export default function Page() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in with your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />
        <div className="w-auto">
          <SocialButtons />
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/register"
            className="font-semibold leading-6 text-[#1E374D] hover:text-[#04AF70]"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
