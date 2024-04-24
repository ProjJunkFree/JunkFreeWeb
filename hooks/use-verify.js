import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuth, finishInitialLoad } from "@/redux/features/authSlice";
import { useVerifyMutation } from "@/redux/features/authApiSlice";

export default function useVerify() {
  // For persistent nga login
  // if we have valid token the persist login

  const dispatch = useDispatch();
  const [verify] = useVerifyMutation();
  useEffect(() => {
    verify()
      .unwrap()
      .then(() => {
        dispatch(setAuth());
      })
      .finally(() => {
        dispatch(finishInitialLoad());
      });
  }, []);
}
