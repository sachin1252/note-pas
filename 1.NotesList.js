import React from 'react'
import WriteNote from './1.addNote';
import Note from './1.Note';

// it is a children of 1.apps.js and parent of Note.js
function Notelist({notess,addNote,notetext,handelNodetext,handleDeleteNote}) {
    console.log(notess)
  return (
    <div className='notes-container'>
        <WriteNote handelNodetext={handelNodetext} addNote={addNote} notetext={notetext}/>
     {notess.map(notees => <Note handleDeleteNote={handleDeleteNote} key={notees.id} note={notees} />  ) //pass the notees value in this functionas as a props
     } 
    </div>
  )
}

export default Notelist;
