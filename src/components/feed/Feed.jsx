import React, { useState, useEffect } from "react";
import Post from "./posts/Post";
import defaultPosts from "../../data/data";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Load posts from localStorage or use default data
    const storedPosts = localStorage.getItem("blogPosts");
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    } else {
      setPosts(defaultPosts);
      localStorage.setItem("blogPosts", JSON.stringify(defaultPosts));
    }

    // Listen for new post events
    const handleNewPost = (event) => {
      const newPost = event.detail;
      setPosts(prevPosts => {
        const updatedPosts = [newPost, ...prevPosts];
        localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
        return updatedPosts;
      });
    };

    window.addEventListener("newPost", handleNewPost);

    return () => {
      window.removeEventListener("newPost", handleNewPost);
    };
  }, []);

  return (
    <div className="feed w-full text-center px-8 py-14 flex flex-col justify-center items-center gap-10 col-span-9">
      {posts.map(post => (
        <Post
          key={post.id}
          title={post.title}
          description={post.description}
          date={post.date}
          likes={post.likes}
          comments={post.comments}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default Feed;
