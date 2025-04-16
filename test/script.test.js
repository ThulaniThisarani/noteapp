/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');
const { waitFor } = require('@testing-library/dom');

describe('Note App', () => {
  let addNoteBtn, noteInput, notesContainer;

  beforeEach(() => {
    // Load HTML
    document.body.innerHTML = fs.readFileSync(
      path.resolve(__dirname, '../index.html'),
      'utf8'
    );

    // Mock localStorage
    const localStorageMock = (() => {
      let store = {};
      return {
        getItem(key) {
          return store[key] || null;
        },
        setItem(key, value) {
          store[key] = value.toString();
        },
        clear() {
          store = {};
        },
        removeItem(key) {
          delete store[key];
        },
      };
    })();
    Object.defineProperty(window, 'localStorage', {
      value: localStorageMock,
    });

    // Load script
    require('../script.js');

    // Get elements
    addNoteBtn = document.getElementById('addNoteBtn');
    noteInput = document.getElementById('noteInput');
    notesContainer = document.getElementById('notesContainer');
  });

  test('adds a note', () => {
    noteInput.value = 'Test Note';
    addNoteBtn.click();

    expect(notesContainer.textContent).toContain('Test Note');
  });

  // test('deletes a note', async () => {
  //   noteInput.value = 'Delete Me';
  //   addNoteBtn.click();

  //   await waitFor(() => {
  //     const deleteBtn = document.querySelector('.delete-btn');
  //     expect(deleteBtn).not.toBeNull();
  //   });

  //   const deleteBtn = document.querySelector('.delete-btn');
  //   deleteBtn.click();

  //   await waitFor(() => {
  //     expect(notesContainer.textContent).not.toContain('Delete Me');
  //   });
  // });
});
