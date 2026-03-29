import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import CreatePostForm from "./components/CreatePostForm";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [admin, setAdmin] = useState(true);
  return (
    <div className={darkTheme ? "dark" : "light"}> 
      <div className="flex flex-col justify-center items-center g-20 relative">
        <Navbar  onCreateForm={setShowForm} theme={darkTheme} setTheme={setDarkTheme} admin={admin} />
        <div className="main w-full min-h-full grid grid-cols-12 gap-6 bg-olive-50 dark:bg-olive-900">
          <Feed admin={admin} />
          <Sidebar />
        </div>
        {showForm && ( 
          <CreatePostForm closeBtn={setShowForm}/> )}
      </div>
    </div>
  );
};

export default App;
