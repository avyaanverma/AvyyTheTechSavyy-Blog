import React from "react";
import { RiSearchLine, RiEditBoxLine } from "@remixicon/react";
import { NavLink } from "react-router";

const Navbar = ({ onCreateForm,  theme, setTheme, admin }) => {
  return (
    <nav className="px-10 flex justify-start items-center gap-40 h-20   w-full bg-olive-50 text-text-primary dark:bg-olive-900 dark:text-olive-50 font-light text-lg">
      <div
        id="logo"
        className="font-classic text-6xl overflow-visible flex flex-col justify-center items-center h-32 w-64 relative top-10 rotate-352"
      >
        <h1>Avyy</h1>
        <h1>TheTechSavyy</h1>
      </div>
      <div className="search px-3 h-10 bg-olive-100 dark:bg-olive-800 rounded-2xl flex justify-center items-center gap-2 ">
        <RiSearchLine className="text-olive-700 dark:text-olive-200" />
        <input
          type="text"
          placeholder="Search"
          className="outline-0 text-olive-700 placeholder:text-olive-600 dark:text-olive-100 dark:placeholder:text-olive-300 bg-transparent"
        />
      </div>
      <div className="info ml-auto flex  justify-center items-center gap-4">
        <button className="bg-olive text-white px-10 py-3 rounded-3xl hover:bg-opacity-80 hover:bg-olive-700  transition-colors cursor-pointer">
          <NavLink to="https://github.com/avyaanverma/AvyyTheTechSavyy-Blog" target="_blank">
            Clone
          </NavLink>
        </button>
        { admin && (
          <div
          onClick={()=> {
            onCreateForm((prev)=> !prev);
          }}
          id="write"
          className="flex justify-center items-center gap-2 border-2 select-none border-olive hover:border-olive-700 px-6 py-2 rounded-3xl cursor-pointer"
        >
          <RiEditBoxLine size={32} />
          Write
        </div>
        )}
        
        <button
          onClick={() => setTheme((prev)=> !prev)}
          className={`w-14 h-8 flex items-center rounded-full p-1 transition duration-300 
          ${theme ? "bg-olive-900 dark:bg-olive-400" : "bg-olive-200"}`}>
          
          <div
          className={`bg-olive-50 w-6 h-6 rounded-full shadow-md transform transition duration-300 
          ${theme ? "translate-x-6" : ""}`}></div>

        </button>
        <div className="pfp w-10 h-10 bg-olive-200 rounded-full flex justify-center items-center text-lg font-semibold ">
          A
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
