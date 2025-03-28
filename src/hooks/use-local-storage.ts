import { useCallback, useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, initialState: T) {
  const [storage, setLocalStorage] = useState<T>(initialState);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const loadedStorage = localStorage.getItem(key);
    if (loadedStorage) setLocalStorage(JSON.parse(loadedStorage));
  }, [key]);

  const updateLocalStorage = useCallback(
    (state: T) => {
      localStorage.setItem(key, JSON.stringify(state));
      setLocalStorage(state);
    },
    [key],
  );

  return { storage, updateLocalStorage };
}
