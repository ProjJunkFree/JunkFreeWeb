"use client";
import React, { useState } from "react";
import CreateModal from "./CreateModal";
import { useCreateItemMutation } from "@/redux/features/authApiSlice";
import Image from "next/image";

const CreateListingForm = ({
  modalVisible,
  setModalVisible,
  refetchListings,
}) => {
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    category: "",
    condition: "",
    image: null,
  });

  const [imageError, setImageError] = useState("");

  const [createItem, { isLoading: createLoading }] = useCreateItemMutation();

  const handleChange = (field, value) => {
    if (field === "image") {
      // Handle file input separately
      setNewItem((prev) => ({
        ...prev,
        image: value,
      }));
    } else {
      setNewItem((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    try {
      // Validate if image is provided
      if (!newItem.image) {
        setImageError("Please select an image.");
        return;
      } else {
        setImageError("");
      }

      const formData = new FormData();
      formData.append("name", newItem.name);
      formData.append("description", newItem.description);
      formData.append("category", newItem.category);
      formData.append("condition", newItem.condition);
      formData.append("image", newItem.image);
      formData.append("available", true);

      const { data } = await createItem(formData);
      console.log("Created item:", data);

      await refetchListings();

      setNewItem({
        name: "",
        description: "",
        category: "",
        condition: "",
        image: null,
      });

      // Close the modal or perform other actions as needed
      setModalVisible(false);
    } catch (error) {
      console.error("Error creating item:", error);
      // Handle error as needed
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      {modalVisible && (
        <CreateModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSubmit={handleSubmit}
          onChange={handleChange}
          newItem={newItem}
          loading={createLoading}
          imageError={imageError}
        />
      )}
    </div>
  );
};

export default CreateListingForm;
