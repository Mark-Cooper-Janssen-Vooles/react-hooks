import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from '../context/notes-context';

const NoteList = () => {
  const {notes} = useContext(NotesContext); //what comes back is the value shared in NoteApp (notes and dispatch)

  return (
    notes.map((note) => (
      <Note key={note.title} note={note} />
    ))
  );
}

export default NoteList;