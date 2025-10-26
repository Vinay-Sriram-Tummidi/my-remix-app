import fs from "fs/promises";

export async function getStoredNotes() {
  const rawFileContent = await fs.readFile("noteStore.json", {
    encoding: "utf-8",
  });
  const data = JSON.parse(rawFileContent);
  const storedNotes = data.notes ?? [];
  return storedNotes;
}

export function storeNotes(notes) {
  return fs.writeFile("noteStore.json", JSON.stringify({ notes: notes || [] }));
}

// Add a new note (with id)
export async function addNote(note) {
  const notes = await getStoredNotes();
  const newNote = { id: Date.now().toString(), ...note };
  notes.push(newNote);
  await storeNotes(notes);
  return newNote;
}

// Edit note by id
export async function editNote(id, updatedData) {
  const notes = await getStoredNotes();
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex === -1) throw new Error("Note not found");

  notes[noteIndex] = { ...notes[noteIndex], ...updatedData };
  await storeNotes(notes);
  return notes[noteIndex];
}

// Delete note by id
export async function deleteNote(id) {
  const notes = await getStoredNotes();
  const filteredNotes = notes.filter((note) => note.id !== id);
  if (notes.length === filteredNotes.length) throw new Error("Note not found");

  await storeNotes(filteredNotes);
  return true;
}
