import {
  Links,
  Meta,
  MetaFunction,  
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { ReactNode } from "react";
import Navbar from "./components/navbar";

const Wrapper = (props: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="w-full max-w-7xl mx-auto flex-1 flex">
      {props.children}
    </main>
    <footer className="w-full max-w-7xl mx-auto p-10 flex justify-center">
      <span className="text-sm text-gray-500">
        Jerry Wang
      </span>
    </footer>
  </div>
);

export const meta: MetaFunction = () => [
  { title: "Remix Blog" },
  {
    name: "description",
    content: "Jerry Wang's Remix blog",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Wrapper>{children}</Wrapper>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
