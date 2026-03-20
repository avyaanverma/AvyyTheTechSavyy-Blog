import React from "react";

const Sidebar = () => {
  return (
    <div className="mt-12 flex flex-col space-y-6 py-4 px-4 bg-white rounded-lg shadow-md w-80">
      {/* Today I'm Building Section */}
      <div className="p-4 bg-olive-100 rounded-lg">
        <h2 className="text-lg font-light text-olive-800 mb-2">
          Today I'm Building
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          A clean, minimal blogging platform with focus on readability and
          modern design patterns.
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <span className="text-olive-600 text-sm">GitHub</span>
            <span className="text-olive-800 text-lg">47 days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-olive-600 text-sm">LeetCode</span>
            <span className="text-olive-800 text-lg">156</span>
          </div>
        </div>
      </div>

      {/* Upcoming Ideas Section */}
      <div className="p-4 bg-white border border-olive-200 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-light text-olive-800">Upcoming Ideas</h2>
          <button className="text-olive-600 text-xl">+</button>
        </div>
        <ul className="list-disc list-inside text-gray-600 text-sm">
          <li>Build a real-time collaborative code editor</li>
          <li>Create a VS Code extension for productivity</li>
          <li>Design a modern dashboard template</li>
          <li>Explore WebAssembly for performance</li>
        </ul>
      </div>

      {/* Feedback Box Section */}
      <div className="p-4 bg-white border border-olive-200 rounded-lg">
        <h2 className="text-lg font-light text-olive-800 mb-2">Feedback Box</h2>
        <textarea
          className="w-full p-2 border border-olive-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-olive-300"
          placeholder="Suggest a topic or improvement..."
        ></textarea>
        <button className="mt-4 w-full bg-olive-600 text-white py-2 rounded-lg hover:bg-olive-700">
          Send Feedback
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
