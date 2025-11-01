import { json } from "@remix-run/node";
import { isRouteErrorResponse, useLoaderData, useRouteError } from "@remix-run/react";
import axios from "axios";



export async function loader({ params }: {params:string}) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );

    const data = response.data;

    // JSONPlaceholder may return {} or 404 — handle both
    if (!data?.id) {
      throw new Response("Posts Not Found", { status: 404, statusText: "Not Found" });
    }

    return json({ post: data });
  } catch (err: any) {
    // If axios returned a 404 or network error, convert to a Remix Response
    if (err?.response?.status === 404) {
      throw new Response("Posts Not Found", { status: 404, statusText: "Not Found" });
    }
    // For other errors, rethrow a 500 Response (or let it bubble as an Error)
    throw new Response("Failed to fetch post", { status: 500 });
  }
}


export default function PostWithId() {
  const { post } = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Individual Post</h1>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
}

