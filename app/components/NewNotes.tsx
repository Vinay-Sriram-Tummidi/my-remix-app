
export default function AddNotes()
{
    return (
   <div className="items-center flex flex-col pt-[40px]">
       <h1>Add new Notes</h1>
       <div className="flex flex-col items-center ">
       <form method="post" className="flex flex-col gap-4">
        <label>
            Title:
        </label>
        <input name="title"></input>
        <label>Content:</label>
        <textarea name="content"></textarea>
        <button type="submit" className="bg-[#4B5945] p-2 rounded-xl text-white">Add Note</button>
       </form>
              </div>
    </div>
    );
 
}