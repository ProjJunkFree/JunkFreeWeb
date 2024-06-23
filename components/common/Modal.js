import React from "react";

const Modal = ({ visible, onClose, onUpdate, listing, onChange, loading }) => {
  if (!visible || !listing) {
    return null; // Return null if modal is not visible or listing is not available
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
    <div className={`modal ${visible ? "visible" : ""} mt-20`}>
      <div className="modal-content p-6 bg-white rounded shadow-lg">
        <h2 className="modal-title text-xl font-semibold mb-4">
          Update Listing
        </h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={listing.name || ""}
            onChange={(e) => onChange("name", e.target.value)}
            className="modal-input p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Description"
            value={listing.description || ""}
            onChange={(e) => onChange("description", e.target.value)}
            className="modal-textarea p-2 border border-gray-300 rounded"
          />
          <div className="flex items-center space-x-2">
            <label className="mr-2">Category:</label>
            <select
              value={listing.category || ""}
              onChange={(e) => onChange("category", e.target.value)}
              className="modal-dropdown p-2 border border-gray-300 rounded"
            >
              <option value="">Select category...</option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <label className="mr-2">Condition:</label>
            <select
              value={listing.condition || ""}
              onChange={(e) => onChange("condition", e.target.value)}
              className="modal-dropdown p-2 border border-gray-300 rounded"
            >
              <option value="">Select condition...</option>
              {conditionTypes.map((condition) => (
                <option key={condition.value} value={condition.value}>
                  {condition.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex space-x-4 mt-4">
            <button
              className="modal-button bg-blue-500 text-white px-4 py-2 rounded"
              onClick={onUpdate}
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>
            <button
              className="modal-button bg-gray-300 text-black px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
