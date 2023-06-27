import React, { useContext, useState } from "react";
import { NoteContext } from '../context/Context';
import { Navbar } from './Navbar';

export const NoteCreate = () => {
  const { addItem } = useContext(NoteContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addDetails = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill in all required fields");
      return;
    }
    const item = {
      id: new Date().getTime().toString(),
      title: title.trim(),
      description: description.trim(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    addItem(item);
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <Navbar />
      <div>
        <form onSubmit={addDetails}>
          <label>
            <strong style={{fontSize:"30px", color:"red"}}>Title:</strong>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add title.."  className="inp"/>
          </label>
          <br />
          <label style={{ display: "flex", alignItems: "center" }}>
  <strong style={{ fontSize: "30px", color: "red", marginLeft: "98px" }}>Description:</strong>
  <textarea
    className="inp"
    placeholder="Add Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  ></textarea>
</label>
          <br />
          <button type="submit" className="primary__button">Add Note</button>
        </form>
      </div>
    </div>
  );
};
