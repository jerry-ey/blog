import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex items-center flex-col md:flex-row p-8">
      <main className="flex-1 flex-col flex gap-2">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
          Welcome to My Blog
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          As a passionate full-stack developer, I specialize in modern web
          technologies with a strong focus on{" "}
          <strong className="text-blue-600">TypeScript</strong>,{" "}
          <strong className="text-blue-600">React</strong>, and{" "}
          <strong className="text-blue-600">NestJS</strong>. My expertise
          extends into <strong className="text-blue-600">DevOps</strong>{" "}
          practices, where I work extensively with{" "}
          <strong className="text-blue-600">Kubernetes</strong>,{" "}
          <strong className="text-blue-600">ArgoCD</strong>, and{" "}
          <strong className="text-blue-600">OpenShift</strong> to ensure smooth,
          scalable deployments. I&apos;m also exploring system-level programming
          with <strong className="text-blue-600">Go</strong> and{" "}
          <strong className="text-blue-600">Rust</strong>, expanding my skillset
          to build performance-critical applications. Follow along as I share
          insights, tips, and experiences in both development and operations,
          blending code and infrastructure to build robust applications.
        </p>
      </main>
      <aside className="flex-1">
        <img src="/logo.png" alt="logo" />
      </aside>
    </div>
  );
}
