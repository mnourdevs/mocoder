"use client";
import { ThemeProvider, useTheme } from "next-themes";
import { SunFilled, MoonFilled } from "@ant-design/icons";
import { useDarkTheme } from "@/customHooks/useDarkThem";
import { DarkThemeProps } from "@/utils/types";

export const Provider = ({ children }: DarkThemeProps) => {
  const mounted: boolean = useDarkTheme();

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export const ThemeToggler = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return <SunFilled onClick={() => setTheme("light")} role="button" />;
    } else {
      return <MoonFilled onClick={() => setTheme("dark")} role="button" />;
    }
  };

  return <>{handleThemeChange()} </>;
};
