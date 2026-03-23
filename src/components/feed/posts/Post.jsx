import React from "react";
import { RiHandHeartLine, RiChat3Line } from "@remixicon/react";

const Post = ({ title, description, date, likes, comments, image, deleteFn }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-6 bg-white border border-gray-300 rounded-3xl shadow-md w-[80%] mx-auto">
      {/* Content Section */}
      <div className="col-span-2 flex flex-col justify-between text-start">
        <div>
          <h2 className="text-2xl font-medium text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 font-light">{description}</p>
        </div>
        <div className="flex items-center mt-4 space-x-4">
          <div className="flex justify-center items-center space-x-2">
            <span className="text-gray-500 text-sm">{date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <RiHandHeartLine className="text-olive text-xl" />
            <span className="text-gray-700 font-light">{likes}</span>
          </div>
          <div className="flex items-center space-x-2">
            <RiChat3Line className="text-olive-500 text-xl" />
            <span className="text-gray-700 font-light">{comments}</span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="col-span-1 flex items-center justify-center">
        <img
          src={image}
          alt="Post Image"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default Post;
