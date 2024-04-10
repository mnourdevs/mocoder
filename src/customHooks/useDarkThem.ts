import { useState, useEffect } from "react";

export const useDarkTheme = (): boolean => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};
