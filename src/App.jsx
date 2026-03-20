import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import CreatePostForm from "./components/CreatePostForm";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center g-20">
      <Navbar onCreatePost={() => setShowForm(true)} />
      <div className="main w-full min-h-full grid grid-cols-12 gap-6">
        <Feed />
        <Sidebar />
      </div>
      {showForm && <CreatePostForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default App;
