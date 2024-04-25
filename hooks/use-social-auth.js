import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { setAuth } from "@/redux/features/authSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export default function useSocialAuth(authenticate, provider) {
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const effectRan = useRef(false);

  useEffect(() => {
    const state = searchParams.get("state");
    const code = searchParams.get("code");

    if (state && code && !effectRan.current) {
      authenticate({ provider, state, code })
        .unwrap()
        .then(() => {
          dispatch(setAuth());
          toast.success("Successfully logged in");
          router.push("/listings");
        })
        .catch(() => {
          // toast.error("Failed to log in");
          router.push("/auth/login");
        });
    }

    return () => {
      effectRan.current = true;
    };
  }, [authenticate, provider, router, searchParams, dispatch]);
}
