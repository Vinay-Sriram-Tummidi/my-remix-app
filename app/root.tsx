import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import styles from "./tailwind.css?url";
import NavBar from "./components/NavBar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
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
          <NavBar/>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (

      <Outlet />
 
  );
}

export function CatchBoundary() {
  const caught = useRouteError();
  if (isRouteErrorResponse(caught)) {
    return (
      <Layout>
        <main className="text-center mt-10">
          <h1>{caught.status} – {caught.statusText}</h1>
          <p>{caught.data}</p>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main>
        <h1>Something went wrong</h1>
      </main>
    </Layout>
  );
}

// 💥 ERROR BOUNDARY — handles real runtime crashes
export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <Layout>
      <div className="text-center mt-20">
        {isRouteErrorResponse(error) ? (
          <>
            <h1 className="text-4xl text-red-600">
              {error.status} {error.statusText}
            </h1>
            <p className="mt-2 text-gray-600">{error.data}</p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-red-500">Something went wrong!</h1>
            <p className="mt-2 text-gray-700">
              {(error as Error)?.message || "Unexpected error occurred."}
            </p>
          </>
        )}
        <a
          href="/"
          className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          ⬅ Back Home
        </a>
      </div>
    </Layout>
  );
}
