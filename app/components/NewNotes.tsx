import { Form, useActionData } from "@remix-run/react";

export default function AddNotes()
{
    const data=useActionData();
    return (
   <div className="items-center flex flex-col pt-[40px]">
       <h1>Insert a new note</h1>
       {data?.message && <p>{data.message}</p>}
       <div className="flex flex-col items-center ">
       <Form method="post" className="flex flex-col gap-4">
        <label>
            Title:
        </label>
        <input name="title"></input>
        <label>Content:</label>
        <textarea name="content"></textarea>
        <button type="submit" className="bg-[#4B5945] p-2 rounded-xl text-white">Add Note</button>
       </Form>
              </div>
    </div>
    );
 
}