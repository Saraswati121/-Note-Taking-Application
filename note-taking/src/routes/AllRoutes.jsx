import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Home } from '../components/Home'
import { NoteCreate } from '../components/NoteCreate'
import { NoteDetails } from '../components/NoteDetails'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/createNote" element={<NoteCreate />}/>
        <Route path="/details" element={<NoteDetails />}/>
        </Routes>
    </div>
  )
}
