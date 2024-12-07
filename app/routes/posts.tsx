import { Outlet } from "@remix-run/react";

export default function Component() {
  return (
    <div className="py-10 px-6 prose dark:prose-invert overflow-auto">
      <Outlet />
    </div>
  );
}