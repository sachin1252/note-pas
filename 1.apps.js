import React, { useState } from 'react'
import Notelist from './1.NotesList'
import {nanoid} from 'nanoid'
import Search from '../1.search'
import Header from './1.header'


//it is a parent of NotesList.js
function Apps() {
  const[notetext,setNotetext] = useState('')
  const [searchText,setsearchText] = useState('') 
  const [darkMode,setdarkMode] = useState(true)
  const [Notes , setNotes] = useState([])

  function addNote(){
    const date = new Date().toLocaleDateString();
    setNotetext('')
    const newNote = {
      text:notetext,
      date:date,
      id:nanoid()
    }
    const updateNote =[...Notes,newNote]
    setNotes(updateNote)
  }

  function handelNodetext(text){
  setNotetext(text)
  }

  function handleDeleteNote(id){
console.log(id);
const updateNotes = Notes.filter(note => note.id !=id)
setNotes(updateNotes);
  }

  function handlesearchText(text){
setsearchText(text);
console.log('my text')
  }
  return (
    <div className={darkMode && "dark-mode"} >
        
      <Header setdarkMode ={setdarkMode}/>
      <Search searchText={searchText} handlesearchText={handlesearchText}/> 
      <Notelist addNote={addNote} notetext={notetext} handelNodetext={handelNodetext} handleDeleteNote={handleDeleteNote} 
      notess= {Notes.filter((note) => note.text.includes(searchText))} /> {/*pass the Notes value in this functionas as a props */}
    </div>


  )
}

export default Apps;
