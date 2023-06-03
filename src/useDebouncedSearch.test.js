import { renderHook, act } from "@testing-library/react-hooks";
import useDebouncedSearch from "./useDebouncedSearch";

// Mock the setTimeout function
jest.useFakeTimers();

describe("useDebouncedSearch", () => {
  test("should set searched value after the delay", async () => {
    const { result } = renderHook(() => useDebouncedSearch(300));

    // Simulate user input
    act(() => {
      result.current.handleChange({ target: { value: "test" } });
    });

    // Fast-forward time by 300ms
    act(() => {
      jest.advanceTimersByTime(300);
    });

    // Wait for the debounce to complete
    await act(async () => {
      await Promise.resolve();
    });

    expect(result.current.searched).toBe("test");
  });
});
