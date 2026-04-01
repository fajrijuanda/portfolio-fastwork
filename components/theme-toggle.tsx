"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark" | "system";

const storageKey = "theme-mode";

function resolveTheme(mode: ThemeMode) {
  if (mode === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  return mode;
}

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "system";
    }

    return (localStorage.getItem(storageKey) as ThemeMode | null) ?? "system";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", resolveTheme(mode));
  }, [mode]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (mode === "system") {
        document.documentElement.setAttribute("data-theme", resolveTheme("system"));
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [mode]);

  const updateMode = (nextMode: ThemeMode) => {
    setMode(nextMode);
    localStorage.setItem(storageKey, nextMode);
    document.documentElement.setAttribute("data-theme", resolveTheme(nextMode));
  };

  return (
    <div className="theme-toggle" role="group" aria-label="Theme mode">
      <button
        aria-label="Use light theme"
        className={mode === "light" ? "active" : ""}
        onClick={() => updateMode("light")}
        type="button"
      >
        <span aria-hidden="true">☀</span> Light
      </button>
      <button
        aria-label="Use dark theme"
        className={mode === "dark" ? "active" : ""}
        onClick={() => updateMode("dark")}
        type="button"
      >
        <span aria-hidden="true">🌙</span> Dark
      </button>
      <button
        aria-label="Use system theme"
        className={mode === "system" ? "active" : ""}
        onClick={() => updateMode("system")}
        type="button"
      >
        <span aria-hidden="true">🖥</span> System
      </button>
    </div>
  );
}
