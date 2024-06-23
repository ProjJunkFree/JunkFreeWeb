"use client";

import Image from "next/image";
import React from "react";
import { formatDistanceToNow } from "date-fns";

const Listing = ({ listing }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <Image
        src={listing.image}
        alt={listing.name}
        width={200}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold">{listing.name}</h2>
        <p className="mt-2 text-gray-600">{listing.description}</p>
        <p className="mt-2 text-gray-600">
          <strong>Category:</strong> {listing.category}
        </p>
        <p className="mt-2 text-gray-600">
          <strong>Condition:</strong> {listing.condition}
        </p>
        <p className="mt-2 text-gray-600">
          <strong>Available:</strong> {listing.available ? "Yes" : "No"}
        </p>
        <p className="mt-2 text-gray-600">
          <strong>Reserved:</strong> {listing.reserved ? "Yes" : "No"}
        </p>
        {/* Additional Info */}
        <div className="mt-2 flex items-center justify-between">
          <p className="text-[12px] text-gray-500">
            Posted by: {listing.user_first_name} {listing.user_last_name}
          </p>
          <p className="text-[12px] text-gray-500">
            posted:
            {formatDistanceToNow(new Date(listing.created_at), {
              addSuffix: true,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Listing;
