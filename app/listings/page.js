"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { CreateListingForm } from "@/components/common";
import { useFetchOwnListingsQuery } from "@/redux/features/authApiSlice";

const ListingsClient = dynamic(() => import("../../hooks/ListingClient"), {
  ssr: false,
});

export default function Page() {
  const [modalVisible, setModalVisible] = useState(false);

  // Function to refetch listings (assuming it is defined or imported)
  const { data: listingsData, refetch: refetchListings } =
    useFetchOwnListingsQuery();

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Listings
          </h1>
        </div>
      </header>
      <main className="mx-auto max-w-7xl py-6 my-8 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setModalVisible(true)}
          >
            Create Listing
          </button>
        </div>
        <CreateListingForm
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          refetchListings={refetchListings}
        />
        <ListingsClient />
      </main>
    </>
  );
}
