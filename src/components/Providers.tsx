"use client";

import { ThemeProvider, useTheme } from "next-themes";
import React from "react";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="theme"
      value={{
        light: "light",
        dark: "dark",
        system: "system",
      }}
    >
      {children}
      <ToastProvider />
    </ThemeProvider>
  );
}

// Moved to separate client component to avoid unnecessary rerenders
const ToastProvider = React.memo(function ToastProvider() {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      className="mt-12"
      position="top-right"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      closeButton
    />
  );
});