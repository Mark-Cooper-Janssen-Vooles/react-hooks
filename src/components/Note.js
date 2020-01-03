import React, { useContext } from 'react';
import NotesContext from '../context/notes-context';

const Note = ({note}) => {
  const {notes, dispatch} = useContext(NotesContext);

  const removeNote = (title) => {
    dispatch({ type: "REMOVE_NOTE", notes: notes.filter((note) => note.title !== title)});
  }

  return (
    <div>
      <hr></hr>
      <h4>{note.title}</h4>
      <span>{note.body}</span>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  )
}

export default Note;