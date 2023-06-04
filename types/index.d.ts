interface UseDebouncedSearchResult {
  search: string;
  searched: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  debouncedSearch: (text: string) => void;
}

declare function useDebouncedSearch(delay?: number): UseDebouncedSearchResult;

export default useDebouncedSearch;
