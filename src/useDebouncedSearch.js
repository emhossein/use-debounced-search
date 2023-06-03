import { useState, useEffect } from "react";

const useDebouncedSearch = (delay = 300) => {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState("");
  let timeoutToClear;

  const fakeDelay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    return () => {
      clearTimeout(timeoutToClear);
    };
  }, []);

  const debounce = (callback, alwaysCall, ms) => {
    return (...args) => {
      alwaysCall(...args);
      clearTimeout(timeoutToClear);
      timeoutToClear = setTimeout(() => {
        callback(...args);
      }, ms);
    };
  };

  const handleChange = (text) => {
    setSearch(text);
  };

  const searchedText = async (text) => {
    await fakeDelay(delay);
    setSearched(text);
  };

  const debouncedSearch = debounce(searchedText, handleChange, delay);

  return { search, searched, handleChange, debouncedSearch };
};

export default useDebouncedSearch;
