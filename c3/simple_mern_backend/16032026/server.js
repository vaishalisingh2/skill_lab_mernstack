const express = require("express");
const app = express();
const port = 5000;
app.use(express.json());

// Middleware to read JSON
let notes = [
  { id: 1, text: "Learn Node.js" },
  { id: 2, text: "Learn Express.js" },
  { id: 3, text: "Learn API" },
];

// Home route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});
// Get all notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

// Add a new note
app.post("/notes", (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ message: "Text is required" });
  }
  const newNote = {
    id: notes.length + 1,
    text: text,
  };
  notes.push(newNote);
  res.status(201).json({
    message: "Note added successfully",
    note: newNote,
  });
});
// Delete a note
app.delete("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex === -1) {
    return res.status(404).json({ message: "Note not found" });
  }
  const deletedNote = notes.splice(noteIndex, 1);
  res.json({
    message: "Note deleted successfully",
    note: deletedNote[0],
  });
});
// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});