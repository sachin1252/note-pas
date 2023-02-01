import React from 'react'

function Header({setdarkMode}) {
  return (
    <div className='header'>
      <h2>Personal Notes</h2>

      <label class="switch">
    <input type="checkbox" onClick={() =>setdarkMode((previousValue) => !previousValue )}/>
    <span class="slider"></span>
</label>
    </div>
  )
}

export default Header;
