import React, { createContext, useState, useEffect } from 'react';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('notes');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(items));
  }, [items]);

  const updateItem = (itemId, updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === itemId ? updatedItem : item))
    );
  };

  const deleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <NoteContext.Provider
      value={{
        items,
        addItem,
        updateItem,
        deleteItem,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
