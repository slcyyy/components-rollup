import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

// ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"]
const config: StorybookConfig = {
  stories: ["../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ["storybook-dark-mode"],
      },
    });
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
