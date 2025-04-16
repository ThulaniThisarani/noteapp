const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNoteBtn');
const notesContainer = document.getElementById('notesContainer');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

function displayNotes() {
  notesContainer.innerHTML = '';
  notes.forEach((note, index) => {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.innerHTML = `
      <p>${note}</p>
      <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
    `;
    notesContainer.appendChild(noteDiv);
  });
}

function addNote() { bb
  const noteText = noteInput.value.trim();
  console.log("Note added ", noteText)
  if (noteText !== '') {
    notes.push(noteText);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteInput.value = '';
    displayNotes();
  }
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  displayNotes();
}

addNoteBtn.addEventListener('click', addNote);
displayNotes();

// Expose globally for testing
window.deleteNote = deleteNote;
window.addNote = addNote;
