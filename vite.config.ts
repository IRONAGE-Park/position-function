import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { compilerOptions } from "./tsconfig.json";

const pathsToModuleNameMapper = (
  paths: Record<string, string[]>,
): { find: string; replacement: string }[] =>
  Object.entries(paths).map(([alias, [p]]) => ({
    find: alias.replace("/*", ""),
    replacement: path.resolve(__dirname, p.replace("/*", "")),
  }));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: pathsToModuleNameMapper(compilerOptions.paths),
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
});
