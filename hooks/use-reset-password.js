import { useState } from "react";
import { useResetPasswordMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useResetPassword() {
  const [email, setEmail] = useState("");
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const onChange = (event) => {
    setEmail(event.target.value);
  };

  const onSubmission = (event) => {
    event.preventDefault();
    resetPassword(email)
      .unwrap()
      .then(() => {
        toast.success(
          "Instructions to reset your password will be sent to you. Please check your email."
        );
      })
      .catch(() => {
        toast.error("Failed to reset your password");
      });
  };
  return {
    email,
    isLoading,
    onChange,
    onSubmission,
  };
}
