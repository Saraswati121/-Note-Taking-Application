import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NoteContext } from '../context/Context';
import { Navbar } from './Navbar'

export const NoteDetails = () => {
  const { noteId } = useParams();
  const { items, deleteItem, updateItem } = useContext(NoteContext);
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const note = items.find((item) => item.id === noteId);

  const handleDelete = () => {
    deleteItem(noteId);
  };

  const handleEdit = () => {
    setEditMode(true);
    setEditedTitle(note.title);
    setEditedDescription(note.description);
  };

  const handleSave = () => {
    const updatedNote = {
      ...note,
      title: editedTitle.trim(),
      description: editedDescription.trim(),
      updatedAt: new Date().toISOString(),
    };
    updateItem(noteId, updatedNote);
    setEditMode(false);
  };

  return (
    <div>
      <Navbar/>
      {note && (
        <div className='details'>
          <h1><strong style={{color:"red"}}>Title</strong> : {note.title}</h1>
          <h1><strong style={{color:"red"}}>Description</strong>: {note.description}</h1>
          <h1><strong style={{color:"red"}}>Created</strong>: {new Date(note.createdAt).toLocaleString()}</h1>
          <h1><strong style={{color:"red"}}>Last Updated</strong>: {new Date(note.updatedAt).toLocaleString()}</h1>
          {!editMode ? (
            <div>
              <button onClick={handleEdit} className='primary__button'>Edit</button>
              <button onClick={handleDelete} className='primary__button'>Delete</button>
            </div>
          ) : (
            <div>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className='inp'
              /> <br />
              <textarea
              className='inp'
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
              ></textarea><br />
              <button onClick={handleSave} className='primary__button'>Save</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
