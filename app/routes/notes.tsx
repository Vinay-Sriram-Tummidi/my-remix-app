import { redirect, useLoaderData } from "@remix-run/react";
import NewNotes from "~/components/NewNotes";
import { getStoredNotes, storeNotes } from "~/data/notes";
import NoteList from "~/components/NoteList"

export default function Notes()


{
    const notes=useLoaderData();
    return (
<>
        <NewNotes/>
        <NoteList notes={notes}/>

</>
    );

}

export function loader()
{
    const notes=getStoredNotes();

    return notes;
}

export async function action({request})
{
    const formData=await request.formData();

    const noteData= Object.fromEntries(formData);

    //Validation

    const existingNotes = await getStoredNotes();

    noteData.id=new Date().toISOString();

    const updatedNotes =existingNotes.concat(noteData);

    await storeNotes(updatedNotes);

    return redirect("/notes");
}

 