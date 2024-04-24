import { useState } from "react";
import { useLoginMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setAuth } from "@/redux/features/authSlice";

export default function useLogin() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmission = (event) => {
    event.preventDefault();
    // prevent nga mo reload pag submit
    login({ email, password })
      .unwrap()
      .then(() => {
        toast.success("Successfully logged in");
        router.push("/listings");
        dispatch(setAuth());
      })
      .catch(() => {
        toast.error("Failed to login");
      });
  };
  return {
    email,
    password,
    isLoading,
    onChange,
    onSubmission,
  };
}
