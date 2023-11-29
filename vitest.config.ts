import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    environment: "happy-dom",
    setupFiles: "./tests/setup.ts",
  },
});
