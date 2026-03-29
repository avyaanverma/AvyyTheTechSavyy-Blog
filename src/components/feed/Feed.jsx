import React, { useState, useEffect } from "react";
import Post from "./posts/Post";
import defaultPosts from "../../data/data";

const Feed = ({admin}) => {
  const time = new Date();
  let [posts, setPosts] = useState([{
    key: 1,
    title: "Drinks Brings Back Memories",
    description: "Everything will be alright",
    date: time.toLocaleDateString(),
    likes: 20,
    comments : 20,
    image: "https://imgs.search.brave.com/q7sI1hdeND9dgjt4ly4UwTSfXf9iRc9o8kpFBErxzfU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93aGVu/aWxlYXZlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvbGlmZS1s/aWZlLXRha2UtcGlj/dHVyZXMtcmVsaXZl/LW1lbW9yaWVzLXJl/cGVhdC5qcGc",
  },{
    key: 2,
    title: "Drinks Brings Back Memories",
    description: "Everything will be alright",
    date: time.toLocaleDateString(),
    likes: 20,
    comments : 20,
    image: "https://imgs.search.brave.com/q7sI1hdeND9dgjt4ly4UwTSfXf9iRc9o8kpFBErxzfU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93aGVu/aWxlYXZlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvbGlmZS1s/aWZlLXRha2UtcGlj/dHVyZXMtcmVsaXZl/LW1lbW9yaWVzLXJl/cGVhdC5qcGc",
  },{
    key: 3,
    title: "Drinks Brings Back Memories",
    description: "Everything will be alright",
    date: time.toLocaleDateString(),
    likes: 20,
    comments : 20,
    image: "https://imgs.search.brave.com/q7sI1hdeND9dgjt4ly4UwTSfXf9iRc9o8kpFBErxzfU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93aGVu/aWxlYXZlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvbGlmZS1s/aWZlLXRha2UtcGlj/dHVyZXMtcmVsaXZl/LW1lbW9yaWVzLXJl/cGVhdC5qcGc",
  }]);

  const deletePost = (id)=>{
    const updatedPosts = posts.filter((post)=>{
      return post.key != id
    })
    setPosts(updatedPosts);
  }
  return (
    <div className="feed w-full text-center px-8 py-14 flex flex-col justify-center items-center gap-10 col-span-9">
      {posts.length ==0 
      ? 
        "No posts to see "
      : 
      posts.map(post => (
        <Post
          key={post.key}
          id={post.key}
          title={post.title}
          description={post.description}
          date={post.date}
          likes={post.likes}
          comments={post.comments}
          image={post.image}
          admin={admin}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
};

export default Feed;
