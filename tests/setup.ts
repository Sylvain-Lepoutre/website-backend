import "@testing-library/jest-dom/vitest";

import { cleanup } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, vi } from "vitest";

beforeAll(() => {
  const consoleError = console.error;
  // const consoleInfo = console.info;

  vi.spyOn(console, "error").mockImplementation(
    (message?: unknown, ...optionalParams: unknown[]) => {
      if (
        typeof message !== "string" ||
        !message.includes(
          "Consider adding an error boundary to your tree to customize error handling behavior.",
        )
      ) {
        consoleError(message, ...optionalParams);
      }
    },
  );

  // vi.spyOn(console, "info").mockImplementation(
  //   (message?: unknown, ...optionalParams: unknown[]) => {
  //     if (
  //       typeof message !== "string" ||
  //       !message.includes(
  //         "Download the React DevTools for a better development experience:",
  //       )
  //     ) {
  //       consoleInfo(message, ...optionalParams);
  //     }
  //   },
  // );
});

afterAll(() => {
  vi.restoreAllMocks();
});

afterEach(() => {
  cleanup();
});
