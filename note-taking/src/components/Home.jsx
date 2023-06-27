import React, { useContext, useState, } from 'react'
import "./style.css"
import { Link } from 'react-router-dom';
import {NoteContext} from '../context/Context'
import { Navbar } from './Navbar'

export const Home = () => {
const {items}= useContext(NoteContext)
const [searchTitle, setSearchTitle] = useState('');

const handleChange = (e) => {
  setSearchTitle(e.target.value);
};

const filteredItems = items.filter((item) =>
  item.title.toLowerCase().includes(searchTitle.toLowerCase())
);
  return (
    <div>
      <Navbar/>
        <div>
          <div className="email__form__container">
            <div className="form__container">
              <input type="text" className="email__input" placeholder=" " onChange={handleChange}/>
              <label className="email__label">Search Titles here..</label>
            </div>
            <button className ="primary__button" type='submit'>Search</button>
          </div>
          <div className='itemscard'>
          {filteredItems.map((item) => (
             <Link key={item.id} to={`/details/${item.id}`} style={{textDecoration:"none"}}>
            <div key={item.id}>
              <h2><strong style={{color:"red"}}>Title</strong> :{item.title}</h2>
              <h2><strong style={{color:"red"}}>Description</strong>: {item.description}</h2>
              <h2><strong style={{color:"red"}}>Created</strong>: {new Date(item.createdAt).toLocaleString()}</h2>
              <h2><strong style={{color:"red"}}>Last Updated</strong>: {new Date(item.updatedAt).toLocaleString()}</h2>
            </div>
            </Link>
          ))}
          </div>
        </div>
    </div>
  )
}
