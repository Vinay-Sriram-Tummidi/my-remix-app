import { json, type LoaderFunctionArgs, type ActionFunctionArgs } from "@remix-run/node";
import { Form, redirect, useLoaderData } from "@remix-run/react";
import { getStoredNotes, addNote, editNote, deleteNote } from "../data/notes";
import NewNotes from "~/components/NewNotes";
import NoteList from "../components/NoteList"
import MainNavigation from "~/components/MainNavigation";

// Loader → fetch notes
export async function loader({}: LoaderFunctionArgs) {
  const notes = await getStoredNotes();
  return json(notes);
}

// Action → handle add/edit/delete
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
    const action = formData.get("action"); // comes from button clicked

  if (action === "add") {
    (await addNote({ title: formData.get("title"), content: formData.get("content") }));
 return json({ success: true });
  }

  if (action === "edit") {
    (await editNote(formData.get("id"), { title: formData.get("title"), content: formData.get("content") }));
     return json({ success: true });
  }

  if (action === "delete") {
    await deleteNote(formData.get("id"));
 return json({ success: true });
  }

  return json({ error: "Invalid action" }, { status: 400 });
}

export default function NotesRoute() {
  const notes = useLoaderData<typeof loader>();
  return (
    <div>
    <MainNavigation notes={notes}/>
    <NewNotes/>
    <NoteList notes={notes}/>
    </div>
  );
}
