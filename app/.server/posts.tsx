import { ServerBuild } from "@remix-run/node";

export type Frontmatter = {
  title: string;
  description: string;
  published: string;
  featured: boolean;
};

export type PostMeta = {
  slug: string;
  frontmatter: Frontmatter;
};

export async function getPosts(): Promise<PostMeta[]> {
  const modules = import.meta.glob<{ frontmatter: Frontmatter }>(
    "../routes/posts.*.mdx",
    { eager: true }
  );

  const build = await import("virtual:remix/server-build");
  const posts = Object.entries(modules).map(([file, post]) => {
    const id = file.replace("../", "").replace(/\.mdx$/, "");    
    const slug = build.routes[id].path;
    
    if (slug === undefined) throw new Error(`No route for ${id}`);

    return {
      slug,
      frontmatter: post.frontmatter,
    };
  });
  return sortBy(posts, (post) => post.frontmatter.published, "desc");
}

function sortBy<T>(
  arr: T[],
  key: (item: T) => any,
  dir: "asc" | "desc" = "asc"
) {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === "asc" ? res : -res;
  });
}

function compare<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
