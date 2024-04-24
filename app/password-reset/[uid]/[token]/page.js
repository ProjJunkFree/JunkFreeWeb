import { PasswordResetConfirmForm } from "@/components/forms";

export const metadata = {
  title: "JunkFree | Confirm Reset Password",
  description: "JunkFree Password Reset Confirm Page ",
};

export default function Page({ params: { uid, token } }) {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Confirm Password Reset
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <PasswordResetConfirmForm uid={uid} token={token} />
      </div>
    </div>
  );
}
