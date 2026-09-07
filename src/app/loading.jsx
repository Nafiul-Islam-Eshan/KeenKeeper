import React from "react";

const loading = () => {
  return (
    <div className="text-center my-auto">
      <div className="w-25 h-25 border-4 border-dashed rounded-full animate-spin border-violet-600 mx-auto"></div>
      <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
      <p className="text-zinc-600 dark:text-zinc-400">Almost There...</p>
    </div>
  );
};

export default loading;
