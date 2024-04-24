import { useState } from "react";
import { useRouter } from "next/navigation";
import { useResetPasswordConfirmMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";

export default function useResetPasswordConfirm(uid, token) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const [resetPasswordConfirm, { isLoading }] =
    useResetPasswordConfirmMutation();

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmission = (event) => {
    event.preventDefault();
    resetPasswordConfirm({ uid, token, new_password, re_new_password })
      .unwrap()
      .then(() => {
        toast.success("Your password has been successfully reset.");
        router.push("/auth/login");
      })
      .catch(() => {
        toast.error("Password Reset Failed");
      });
  };
  return {
    new_password,
    re_new_password,
    isLoading,
    onChange,
    onSubmission,
  };
}
