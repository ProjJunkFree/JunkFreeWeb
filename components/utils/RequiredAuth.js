"use client";

import { useSelector } from "react-redux";
import { redirect } from "next/navigation";
import { Spinner } from "@/components/common";
import { toast } from "react-toastify";

export default function RequiredAuth({ children }) {
  // const router = useRouter();
  const { isLoading, isAuthenticated } = useSelector((state) => state.auth);

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />;
      </div>
    );
  }

  if (!isAuthenticated) {
    // toast.error("You must be logged in");
    // router.push("/auth/login");
    redirect("/auth/login");
  }
  return <>{children}</>;
}
