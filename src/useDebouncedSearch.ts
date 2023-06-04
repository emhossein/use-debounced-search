import { useState, useEffect } from "react";

const useDebouncedSearch = (delay = 300) => {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState("");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | undefined>();

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const debounce = (callback: () => void, ms: number) => {
    let timeout: NodeJS.Timeout | undefined;
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(callback, ms);
    };
  };

  const handleDebouncedSearch = () => {
    setSearched(search);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const debouncedSearch = debounce(handleDebouncedSearch, delay);
    debouncedSearch();
  }, [search, delay]);

  return { search, searched, handleChange };
};

export default useDebouncedSearch;
