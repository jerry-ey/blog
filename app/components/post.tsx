import { Link } from "@remix-run/react";
import { Timer } from "lucide-react";

import type { PostMeta } from "~/.server/posts";

export const Post = ({ slug, frontmatter }: PostMeta) => {
  return (
    <Link className="no-underline" to={`/posts/${slug}`}>
      <article className="border border-white rounded-md p-6 bg-slate-800">
        <h3 className="text-3xl font-bold mt-0">{frontmatter.title}</h3>
        <p className="text-gray-600 dark:text-gray-400">
          {frontmatter.description}
        </p>

        <time
          className="text-sm text-purple-500 flex gap-2 items-center"
          dateTime={frontmatter.published}
        >
          <Timer />
          {frontmatter.published.replace(/-/g, "/")}
        </time>
      </article>
    </Link>
  );
};
