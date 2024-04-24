import { useState } from "react";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

// Para e  refactoring ang code sa register page
export default function useRegister() {
  const router = useRouter();
  const [register, { isLoading }] = useRegisterMutation();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, email, password, re_password } = formData;

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmission = (event) => {
    event.preventDefault();
    register({ first_name, last_name, email, password, re_password })
      .unwrap()
      .then(() => {
        toast.success(
          "You successfully signed up, please check your email to verify account"
        );
        router.push("/auth/login");
      })
      .catch(() => {
        toast.error("Failed to register your account");
      });
  };
  return {
    first_name,
    last_name,
    email,
    password,
    re_password,
    isLoading,
    onChange,
    onSubmission,
  };
}
