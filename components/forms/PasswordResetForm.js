"use client";

import { Form } from "@/components/forms";
import { useResetPassword } from "@/hooks";

export default function PasswordResetForm() {
  const { email, isLoading, onChange, onSubmission } = useResetPassword();

  const config = [
    {
      labelText: "Email",
      labelId: "email",
      type: "email",
      value: email,
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
