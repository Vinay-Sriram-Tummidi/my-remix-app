import { Form, useActionData, useFetcher } from "@remix-run/react";

export default function AddNotes()
{
    const data=useActionData();
    const fetcher=useFetcher();
    return (
   <div className="items-center flex flex-col pt-[40px]">
       <h1>Insert a new note</h1>
       {data?.message && <p>{data.message}</p>}
       <div className="flex flex-col items-center ">
       <fetcher.Form method="post" className="flex flex-col gap-4">
       
        <label>
            Title:
        </label>
        <input name="title"></input>
        <label>Content:</label>
        <textarea name="content"></textarea>
        <button type="submit" name="action" value="add" className="bg-[#4B5945] p-2 rounded-xl text-white">Add Note</button>
       </fetcher.Form>
        </div>
    </div>
    );
 
}