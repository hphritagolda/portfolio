import type { MetaFunction, LinksFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import Header from "./components/Header";

import styles from "./styles/tailwind.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: "Hanna Pritagolda",
  description:
    "A digital design student, an occassional youtuber & a serious foodie.",
});

export function CatchBoundary() {
  const caught = useCatch();
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <main className="mx-auto max-w-xl px-8 pt-48">
          <h1 className="bold highlighted-title mb-8 text-4xl">
            {caught.status} {caught.statusText}
          </h1>
          <img
            src={`https://http.cat/${caught.status}`}
            alt="Status"
            width={500}
            height={500}
          />
        </main>
        <Header />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-background text-grey">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV !== "production" && <LiveReload />}
      </body>
    </html>
  );
}
