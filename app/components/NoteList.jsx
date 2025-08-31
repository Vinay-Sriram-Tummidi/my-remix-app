
import edit from "../assets/edit.svg";
import deleteIcon from "../assets/deleteIcon.svg";
import { getStoredNotes } from "../data/notes";
import {Form, useFetcher} from "@remix-run/react"


export default function NoteList({notes})
{
      return(
        <>
        <ul className="flex mt-6 items-center justify-center">
        {notes.map((note,index)=>
        (
            <div className="flex bg-[#91AC8F] flex-wrap flex-row gap-1 mx-4 p-4 border rounded-xl border-[#4B5945]">
                <li key={note.id}>
                <ul>
                    <li>
             <Form method="post" style={{ display: "inline" }}>
                        <input type="hidden" name="id" value={note.id} />
                  <button type="submit" name="action" value="delete"><img src={deleteIcon}  className="w-[60px] h-[30px]"/></button>
                <button type="submit" name="action" value="edit"><img src={edit}   className="w-[60px] h-[30px]"/></button>
            </Form>
            </li>
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