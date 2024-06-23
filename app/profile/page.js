"use client";
import { ProfileInfo, Spinner } from "@/components/common";
import {
  useRetrieveUserQuery,
  useFetchOwnListingsQuery,
  useUpdateItemMutation,
} from "@/redux/features/authApiSlice";
import Listing from "@/components/common/Listing";
import { useEffect, useState } from "react";
import Modal from "@/components/common/Modal";
import { formatDistanceToNow } from "date-fns";

export default function Page() {
  const {
    data: user,
    isLoading: userLoading,
    isFetching: userFetching,
  } = useRetrieveUserQuery();
  const {
    data: listings,
    error: listingsError,
    isLoading: listingsLoading,
    isFetching: listingsFetching,
  } = useFetchOwnListingsQuery();

  const [modalVisible, setModalVisible] = useState(false);
  const [listingToUpdate, setListingToUpdate] = useState(null); // State to hold the listing to update
  const [updatedListing, setUpdatedListing] = useState({
    name: "",
    description: "",
    category: "",
    condition: "",
  });

  // Mutation hook for updating an item
  const [updateItem, { isLoading: updateLoading }] = useUpdateItemMutation();

  useEffect(() => {
    // Load initial data or perform any necessary initializations
  }, []);

  const handleUpdateModal = (listing) => {
    setListingToUpdate(listing);
    setUpdatedListing({
      name: listing.name,
      description: listing.description,
      category: listing.category,
      condition: listing.condition,
    });
    setModalVisible(true);
  };

  const handleUpdate = async () => {
    try {
      const { data } = await updateItem({
        id: listingToUpdate.id,
        ...updatedListing,
      });

      // Handle success, update your listings state or fetch new data
      console.log("Updated item:", data);
      setModalVisible(false);
    } catch (error) {
      // Handle error
      console.error("Error updating item:", error);
    }
  };

  if (userLoading || listingsLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spinner lg />
      </div>
    );
  }

  if (listingsError) {
    return <div>Error loading listings.</div>;
  }

  // Sort listings by created_at in descending order
  const sortedListings = listings
    .slice()
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

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

        <h2 className="text-2xl font-bold mt-8 mb-4">Your Listings</h2>
        {sortedListings.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedListings.map((listing) => (
              <div key={listing.id}>
                <Listing listing={listing} />
                <button onClick={() => handleUpdateModal(listing)}>Edit</button>
              </div>
            ))}
          </div>
        ) : (
          <div>No listings found.</div>
        )}

        <Modal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onUpdate={handleUpdate}
          listing={updatedListing} // Pass updatedListing instead of listingToUpdate
          onChange={(field, value) =>
            setUpdatedListing((prev) => ({ ...prev, [field]: value }))
          }
          loading={updateLoading}
        />
      </main>
    </>
  );
}
