import React from "react";
import { RiHandHeartLine, RiChat3Line } from "@remixicon/react";

const Post = ({ deletePost, id, title, description, date, likes, comments, image, admin }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-6 bg-olive-50 border dark:bg-olive-800 dark:text-olive-50  border-olive-200 rounded-3xl shadow-md w-[80%] mx-auto">
      {/* Content Section */}
      <div className="col-span-2 flex flex-col justify-between text-start">
        <div>
          <h2 className="text-2xl font-medium text-olive-900 dark:text-olive-50 mb-2">{title}</h2>
          <p className="text-olive-700 dark:text-olive-100 font-light">{description}</p>
        </div>
        <div className="flex items-center mt-4 space-x-4">
          <div className="flex justify-center items-center space-x-2">
            <span className="text-olive-600 dark:text-olive-100 text-sm">{date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <RiHandHeartLine className="text-olive dark:text-olive-500 text-xl" />
            <span className="text-olive-800  dark:text-olive-500 font-light">{likes}</span>
          </div>
          <div className="flex items-center space-x-2">
            <RiChat3Line className="text-olive-500 dark:text-olive-500 text-xl" />
            <span className="text-olive-800  dark:text-olive-500 font-light">{comments}</span>
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

      {/* delete Section */}
      {admin && (
        <div className="w-1/3">
          <div onClick={()=>{
            console.log("CLICKED")
            deletePost(id)
          }} className="py-2 w-1/2 bg-olive-200 rounded-2xl font-semibold cursor-pointer">
            X
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
