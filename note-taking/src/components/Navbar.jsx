import React from 'react'
import "./style.css"

export const Navbar = () => {
  return (
    <div id='navbar'>
        <div className='love'>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NPooXpJ_O7wdA4FiBQ3qIeIWzaGtbuOS9Q&usqp=CAU" alt="" width="100px" height="50px"/> 
           <p>NOTES</p>
        </div>
        <div className='love'>
            <a href="/">Home</a>
            <a href="/createNote">CreateNote</a>
        </div>
    </div>
  )
}
