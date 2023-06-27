import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NoteProvider } from '../context/Context';
import { Home } from '../components/Home';
import { NoteCreate } from '../components/NoteCreate';
import { NoteDetails } from '../components/NoteDetails';

export const AllRoutes = () => {
  return (
    <div>
      <NoteProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createNote" element={<NoteCreate />} />
          <Route path="/details/:noteId" element={<NoteDetails />} />
        </Routes>
      </NoteProvider>
    </div>
  );
};
