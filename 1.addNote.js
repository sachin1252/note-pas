import React from 'react'

function WriteNote({addNote,notetext,handelNodetext}) {
  return (
    <div className='note new-note'>
      <textarea value={notetext} onChange={(e) => handelNodetext(e.target.value)} cols="30" rows="10" maxLength={250} placeholder='Type something here...'></textarea>
      <div className="note-footer">
      <small className='remaining'>Remaining:{250-notetext.length} </small>
      <button className="add-btn" onClick={addNote}>Add</button>
      </div>
      
    </div>
  )
}

export default WriteNote;
