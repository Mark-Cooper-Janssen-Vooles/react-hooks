import React, {useState, useContext} from 'react'; 
import NotesContext from '../context/notes-context';

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_NOTE", title, body })

    setTitle('');
    setBody('');
  }

  return (
    <form onSubmit={addNote}>
        <input 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
        />
        <textarea 
          value={body} 
          onChange={(e) => setBody(e.target.value)}
          type="textArea"
          placeholder="Note body"
        />
        <button>Add Note</button>
      </form>
  )
}

export default AddNoteForm;