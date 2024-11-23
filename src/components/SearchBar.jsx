import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [text, setText] = useState("");
  const words = ["Destinations", "Tours", "Activities"];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setText(words[index]);
      index = (index + 1) % words.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <input
      type="text"
      placeholder={`Search for ${text}`}
      className="w-full px-4 py-2 border rounded-full"
    />
  );
};

export default SearchBar;
