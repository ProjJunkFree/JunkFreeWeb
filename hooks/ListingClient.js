"use client";

import React from "react";
import { useFetchItemsQuery } from "@/redux/features/authApiSlice";
import Image from "next/image";

const ListingsClient = () => {
  const { data: items, error, isLoading } = useFetchItemsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading items.</div>;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white overflow-hidden shadow rounded-lg"
        >
          <img
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListingsClient;
