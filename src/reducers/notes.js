//need to define reducer function before you can call it. 
const notesReducer = (state, action) => {
  //state is an array of notes
  //action provides info of action to perform

  switch(action.type){
    case 'POPULATE_NOTES':
      return action.notes;
    case 'ADD_NOTE':
      return [
        ...state,
        { title: action.title, body: action.body }
      ]
    case 'REMOVE_NOTE':
      return action.notes;
    default: 
      return state;
  }
}

export default notesReducer;