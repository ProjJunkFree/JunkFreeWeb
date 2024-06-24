"use client";
import React, { useEffect } from "react";
import {
  useFetchItemsQuery,
  useFetchAuthenticatedUserQuery,
  useFetchOwnListingsQuery,
} from "@/redux/features/authApiSlice";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

const ListingsClient = () => {
  const {
    data: items,
    error: itemsError,
    isLoading: itemsLoading,
  } = useFetchItemsQuery();

  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
  } = useFetchAuthenticatedUserQuery();

  if (itemsLoading || userLoading) return <div>Loading...</div>;
  if (itemsError || userError) return <div>Error loading items.</div>;

  // Sort items by created_at in descending order
  const sortedItems = items
    .slice()
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {sortedItems.map((item) => (
        <div
          key={item.id}
          className="bg-white overflow-hidden shadow rounded-lg"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={500}
            height={500}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold">{item.name}</h2>
            <p className="mt-2 text-gray-600">{item.description}</p>
            <p className="mt-2 text-gray-600">
              <strong>Category:</strong> {item.category}
            </p>
            <p className="mt-2 text-gray-600">
              <strong>Condition:</strong> {item.condition}
            </p>
            <p className="mt-2 text-gray-600">
              <strong>Available:</strong> {item.available ? "Yes" : "No"}
            </p>
            <p className="mt-2 text-gray-600">
              <strong>Reserved:</strong> {item.reserved ? "Yes" : "No"}
            </p>
            {/* Additional Info */}
            <div className="mt-2  items-center justify-between">
              <p className="text-sm text-gray-500">
                Posted by: {item.user_first_name} {item.user_last_name}
              </p>
              <p className="text-sm text-gray-500">
                posted:
                {formatDistanceToNow(new Date(item.created_at), {
                  addSuffix: true,
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Function to format date (you can adjust this based on your date format)
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default ListingsClient;
