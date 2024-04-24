"use client";

import { Form } from "@/components/forms";
import { useResetPasswordConfirm } from "@/hooks";

export default function PasswordResetConfirmForm({ uid, token }) {
  const { new_password, re_new_password, isLoading, onChange, onSubmission } =
    useResetPasswordConfirm(uid, token);

  const config = [
    {
      labelText: "New password",
      labelId: "new_password",
      type: "password",
      value: new_password,
      required: true,
    },
    {
      labelText: "Confirm New Password",
      labelId: "re_new_password",
      type: "password",
      value: re_new_password,
      required: true,
    },
  ];
  return (
    <Form
      config={config}
      isLoading={isLoading}
      btnText="Reset Password"
      onChange={onChange}
      onSubmission={onSubmission}
    />
  );
}
