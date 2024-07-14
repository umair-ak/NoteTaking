// npx tailwindcss -i ./src/index.css -o ./output.css --watch

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  const handleInputChange = (e) => {
    setCurrentNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentNote.trim()) {
      setNotes([...notes, currentNote]);
      setCurrentNote('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="bg-blue-600 text-white p-4 w-full text-center">
        <h1 className="text-2xl font-bold">Simple Note-Taking App</h1>
      </header>
      <main className="w-full max-w-2xl mt-8 px-4">
        <form onSubmit={handleSubmit} className="mb-8">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={currentNote}
            onChange={handleInputChange}
            placeholder="Write your note here..."
          />
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Note
          </button>
        </form>
        <div className="flex flex-wrap justify-center gap-4">
          {notes.map((note, index) => (
            <div key={index} className="bg-white rounded shadow overflow-hidden inline-block max-w-sm">
              <div className="p-4">
                <ReactMarkdown className="prose">{note}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;