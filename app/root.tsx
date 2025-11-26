import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import styles from "./tailwind.css?url";
import NavBar from "./components/NavBar";
import { GlobalProvider } from "./common/GlobalProvider";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

// --------------------------------------------------
// ROOT APP (WRAPS ALL ROUTES)
// --------------------------------------------------
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>

      <body>
        {/* ✅ GLOBAL CONTEXT AVAILABLE EVERYWHERE */}
        <GlobalProvider>
          {/* ✅ NAVBAR ALWAYS AT TOP */}
          <NavBar />

          {/* 👇 ALL ROUTES RENDER HERE */}
          <Outlet />
        </GlobalProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// --------------------------------------------------
// CATCH BOUNDARY (404, 401, 500 FROM THROW)
// --------------------------------------------------
export function CatchBoundary() {
  const caught = useRouteError();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>

      <body>
        <GlobalProvider>
          <NavBar />

          <main className="text-center mt-20">
            {isRouteErrorResponse(caught) ? (
              <>
                <h1 className="text-3xl font-semibold">
                  {caught.status} – {caught.statusText}
                </h1>
                <p className="text-gray-600 mt-2">{caught.data}</p>
              </>
            ) : (
              <h1>Unknown error occurred.</h1>
            )}
          </main>
        </GlobalProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// --------------------------------------------------
// ERROR BOUNDARY (JS RUNTIME ERRORS)
// --------------------------------------------------
export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>

      <body>
        <GlobalProvider>
          <NavBar />

          <main className="text-center mt-20">
            {isRouteErrorResponse(error) ? (
              <>
                <h1 className="text-3xl text-red-600 font-bold">
                  {error.status} {error.statusText}
                </h1>
                <p className="text-gray-600 mt-2">{error.data}</p>
              </>
            ) : (
              <>
                <h1 className="text-3xl text-red-600 font-bold">
                  Something went wrong!
                </h1>
                <p className="text-gray-600 mt-2">
                  {(error as Error)?.message ?? "Unexpected error."}
                </p>
              </>
            )}

            <a
              href="/"
              className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              ⬅ Back Home
            </a>
          </main>
        </GlobalProvider>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
