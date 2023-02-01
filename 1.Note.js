import React from 'react'
import {FaTrashAlt} from 'react-icons/fa'


// it is a chldren of NotesList.js
function Note({note,handleDeleteNote}) {
  return (
    <div className='note'>
      <span>{note.text}</span>

      <div className="note-footer">
      <small className='date'>{note.date}</small>
      <button className="delete-btn" onClick={() =>handleDeleteNote(note.id)}><FaTrashAlt/></button>
      </div>
      
      
    </div>
  )
}

export default Note;
