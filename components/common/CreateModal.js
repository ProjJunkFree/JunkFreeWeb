import React from "react";

const CreateModal = ({
  visible,
  onClose,
  onSubmit,
  onChange,
  newItem,
  loading,
  imageError,
}) => {
  if (!visible) {
    return null;
  }

  const conditionTypes = [
    { label: "New", value: "new" },
    { label: "Like new", value: "like_new" },
    { label: "Used", value: "used" },
  ];

  const categories = [
    { label: "Electronics", value: "electronics" },
    { label: "Furniture", value: "furniture" },
    { label: "Clothing", value: "clothing" },
    { label: "Appliances", value: "appliances" },
    { label: "Books", value: "books" },
    { label: "Others", value: "other" },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Create New Listing</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              value={newItem.name}
              onChange={(e) => onChange("name", e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <input
              id="description"
              type="text"
              placeholder="Description"
              value={newItem.description}
              onChange={(e) => onChange("description", e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="category"
            >
              Category
            </label>
            <select
              id="category"
              value={newItem.category}
              onChange={(e) => onChange("category", e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="condition"
            >
              Condition
            </label>
            <select
              id="condition"
              value={newItem.condition}
              onChange={(e) => onChange("condition", e.target.value)}
              className="w-full border border-gray-300 rounded p-2"
              required
            >
              <option value="">Select Condition</option>
              {conditionTypes.map((condition) => (
                <option key={condition.value} value={condition.value}>
                  {condition.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="image">
              Image
            </label>
            <input
              id="image"
              type="file"
              onChange={(e) => onChange("image", e.target.files[0])}
              className="w-full border border-gray-300 rounded p-2"
              accept="image/*"
            />
            {imageError && (
              <p className="text-red-500 text-sm mt-1">{imageError}</p>
            )}
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white rounded p-2 w-full mr-2"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create"}
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-700 rounded p-2 w-full ml-2"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;
