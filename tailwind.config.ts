import { addDynamicIconSelectors } from "@iconify/tailwind";
import tailwindPresetMantine from "tailwind-preset-mantine";
import { breakpoints, colors } from "./src/theme.ts";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "./src/**/*.css",
  ],
  theme: {
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
  presets: [
    tailwindPresetMantine({
      mantineBreakpoints: breakpoints,
      mantineColors: colors,
    }),
  ],
};
