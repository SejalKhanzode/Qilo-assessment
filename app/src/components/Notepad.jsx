import React, { useState } from 'react';
import { MdDeleteForever } from "react-icons/md";
import "../pages/weather.css"

const Notepad = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote('');
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="  ">
      <div className='tab-container'><h1 className='tab'>Notepad</h1></div>
      <div className="form-container">
  <input
    type="text"
    value={note}
    onChange={(e) => setNote(e.target.value)}
    className="flex-grow p-2 border text-[#112d4e] border-gray-300 rounded-md outline-none bg-dark1 w-40 "
    placeholder="Enter a note"
  />
  <button
    onClick={handleAddNote}
    className="btn "
  >
    N
  </button>


      </div>
      
      {notes.length > 0 && (
        <table className="min-w-full bg-dark2 mt-10 rounded-md">
          <thead className='flex'>
            <tr className='flex justify-between'>
              <th className="tab">Notes</th>
            </tr>
          </thead>
          <tbody className=''>
            {notes.map((note, index) => (
              <tr key={index} className="border-t space-x-5">
                <td className="py-2 pl-5 text-white text-justify">{note}</td>
                <td className="flex justify-end py-2 pr-5">
                  <button
                    onClick={() => handleDeleteNote(index)}
                    className="bg-red-500 text-white px-2 py-2 rounded-full hover:bg-red-600 transition duration-300"
                  >
                    <MdDeleteForever size={24}/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Notepad;
