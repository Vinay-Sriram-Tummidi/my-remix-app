import fs from 'fs/promises';

export async function getStoredNotes() {
  const rawFileContent = await fs.readFile('noteStore.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedNotes = data.notes ?? [];
  return storedNotes;
}

export function storeNotes(notes) {
  return fs.writeFile('noteStore.json', JSON.stringify({ notes: notes || [] }));
}