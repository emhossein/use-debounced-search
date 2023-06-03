# use-debounced-search

A custom React hook for debounced search functionality.

## Installation

```bash
npm install use-debounced-search


```

## Usage

```javascript
import React from "react";
import useDebouncedSearch from "use-debounced-search";

const SearchComponent = () => {
  const { search, handleChange, debouncedSearch } = useDebouncedSearch(300);

  const handleSearch = () => {
    // Perform search with the debounced value
    console.log(search);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={debouncedSearch}>Search</button>
      <button onClick={handleSearch}>Perform Search</button>
    </div>
  );
};

export default SearchComponent;
```

## API

The `useDebouncedSearch` hook returns an object with the following properties:

- search: The current search value.
- handleChange: A function to handle the input change event.
- debouncedSearch: A function to trigger the debounced search.

## Parameters

- `delay` (optional): The debounce delay in milliseconds. Default is `300`.

##License
This project is licensed under the MIT License. See the LICENSE file for details.
