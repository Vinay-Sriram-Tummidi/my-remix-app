

export default function NoteList({notes})
{
    return(
        <>
        <ul className="flex mt-6 items-center justify-center">
        {notes.map((note,index)=>
        (
            <div className="flex bg-[#91AC8F] flex-wrap gap-2 mx-4  w-[195px] p-4 border rounded-xl border-[#4B5945]">
                <li key={note.id}>
                <ul>
                    <div className="flex text-sm">
                    <li>#{index + 1}</li>{" "}
                    <li><time dateTime={note.id}>
                    {new Date(note.id).toLocaleDateString('en-US',{day:"numeric",month:"short",year:"numeric"})}
                    </time></li>
              </div>
              <hr/>
                <li> <h1 className="text-lg">{note.title}</h1></li>
                <li><p className="text-sm">{note.content}</p></li>
                </ul>
                </li>
                </div>
        )
        )}
        </ul>
        </>
    )
}