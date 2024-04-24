"use client";

import { ProfileInfo, Spinner } from "@/components/common";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

export default function Page() {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery();
  const config = [
    {
      label: "First name",
      value: user?.first_name,
    },
    {
      label: "Last name",
      value: user?.last_name,
    },
    {
      label: "Email",
      value: user?.email,
    },
  ];

  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  // if (isError) {
  //   router.push("/auth/login");
  //   toast.error("Please login again.");
  // }

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Profile Details
          </h1>
        </div>
      </header>
      <main className="mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8">
        <ProfileInfo config={config} />
      </main>
    </>
  );
}
