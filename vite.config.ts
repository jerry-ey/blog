import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// mdx
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypePrettyCode from "rehype-pretty-code";
import rehypePrism from "rehype-prism";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: [
        rehypePrism, // Add syntax highlighting
        [
          rehypePrettyCode,
          {
            theme: "one-dark-pro",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onVisitLine(node: any) {
              // Handle empty lines to avoid visual collapse
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }];
              }
            },           
          },
        ],
      ],
    }),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
  ],
});
