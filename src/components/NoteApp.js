import React, {useState, useEffect, useReducer } from 'react'; 
import notesReducer from '../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import NotesContext from '../context/notes-context';

const NoteApp = () => {
  const getNotes = () => {
    let storedNotes;
    if (localStorage.getItem("storedNotes") === null) {
      storedNotes = [];
    } else {
      storedNotes = JSON.parse(localStorage["storedNotes"]);
    }
    return storedNotes;
  };

  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    dispatch({ type: "POPULATE_NOTES", notes: getNotes() });
    // setNotes(getNotes());
  }, []); //loads once on page load.

  useEffect(() => {
    //save to local storage:
    localStorage["storedNotes"] = JSON.stringify(notes);
  }, [notes]); //loads whenever notes is updated.

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>Notes</h1>
      <p>Add note</p>
      <AddNoteForm />
      <NoteList />
    </NotesContext.Provider>
  )
}



export default NoteApp;