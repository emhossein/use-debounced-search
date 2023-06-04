import { useState, useEffect } from "react";

const useDebouncedSearch = (delay = 300) => {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;

    const debounce = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setSearched(search);
      }, delay);
    };

    debounce();

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [search, delay]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clearSearched = () => {
    setSearched("");
  };

  return { search, searched, handleChange, clearSearched };
};

export default useDebouncedSearch;
