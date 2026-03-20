import React, { useState } from "react";
import { RiImageLine, RiAddLine } from "@remixicon/react";

const CreatePostForm = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showImageInput, setShowImageInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const newPost = {
      id: Date.now(),
      title,
      description,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      likes: "0",
      comments: "0",
      image: imageUrl || "https://via.placeholder.com/400x200?text=No+Image",
    };

    window.dispatchEvent(new CustomEvent("newPost", { detail: newPost }));

    setTitle("");
    setDescription("");
    setImageUrl("");
    setShowImageInput(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-3xl p-8 w-[60%] max-w-2xl shadow-2xl">
        <h2 className="text-2xl font-light text-gray-800 mb-6 text-center">
          Create your Blog Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-light text-gray-600 mb-2">
              Add your heading
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-300 font-light"
              placeholder="Enter your blog post title..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-light text-gray-600 mb-2">
              Add your subheading
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-300 font-light"
              placeholder="Enter your blog post description..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-light text-gray-600 mb-2">
              Add your image
            </label>
            <div
              className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex justify-center items-center cursor-pointer hover:border-olive-300 transition-colors"
              onClick={() => setShowImageInput(true)}
            >
              <div className="flex items-center space-x-3">
                <RiImageLine className="text-gray-400 text-2xl opacity-50" />
                <RiAddLine className="text-gray-400 text-xl" />
              </div>
            </div>
          </div>

          {showImageInput && (
            <div className="mt-4">
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-olive-300 font-light"
                placeholder="Enter image URL..."
              />
            </div>
          )}

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 text-gray-600 font-light hover:text-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition-colors font-light"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;
