import { PasswordResetForm } from "@/components/forms";

export const metadata = {
  title: "JunkFree | Password Reset",
};

export default function Page() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Forgot Password?
        </h2>
        <p className="antialiased my-5 text-sm font-normal tracking-wide leading-6 text-gray-600">
          Enter the email address you used when you joined and we&apos;ll send
          you instructions to reset your password.
        </p>
        <p className="antialiased  my-5 text-sm font-normal tracking-wide leading-6 text-gray-600 ">
          For security reasons, we do NOT store your password. So rest assured
          that we will never send your password via email.
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <PasswordResetForm />
      </div>
    </div>
  );
}
