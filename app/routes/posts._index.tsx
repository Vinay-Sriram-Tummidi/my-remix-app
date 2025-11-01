import { Link, useActionData, useLoaderData, useRevalidator } from "@remix-run/react";
import axios from "axios";
import { Form } from "@remix-run/react";
import { json } from "@remix-run/node";

export async function loader() {

  try{
  const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = data.data;

    return {
    postsData: posts.slice(0, 5),
  }
  } catch(error){
    console.error("❌ Failed to load posts:", error);
    throw new Response("Failed to load the Loader",{status:500});
  }
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();

  const newPost = {
    title: formData.get("title"),
    body: formData.get("body"),
    userId: 1,
  };

  console.log("New Post Data", newPost);

  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newPost
  );

  console.log("✅ Created post response:", data);

  return json({ success: true, createdPost: data });
}
export function Posts() {
  const loadingData = useLoaderData();
  const actionData = useActionData();

  const {revalidate ,state}=useRevalidator();

  console.log("Loading Slice", loadingData);
  return (
    <div>
      <h2>Create a Post</h2>

      {actionData?.success && (
        <div className="mt-4 p-2 text-green-700 bg-green-100 rounded">
          <h3>Post Created Successful :{actionData.createdPost.id} </h3>
        </div>
      )}

      <button onClick={()=>revalidate()}   className="bg-[#534559] p-2 rounded-xl text-white">Refresh me </button>
 {state === "loading" && <span>Refreshing...</span>}

      <div className="flex justify-center">
        <Form method="POST" className="flex flex-col w-[120px]">
          <input name="title" placeholder="Title" />
          <textarea name="body" placeholder="Enter the description ..." />
          <button type="submit">Create Post</button>
        </Form>
      </div>

      <h1 color="red"> List of Posts</h1>
      <ul>
        {loadingData.postsData.map((item) => (
          <li key={item.id}>
            <Link to={`/posts/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
