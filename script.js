const bigAddButton = document.getElementById('but-add-note').addEventListener('click', addNote)
const resetButton = document.getElementById('but-reset').addEventListener('click', resetNotes)
const colorChangeButton = document.getElementById('but-color-change').addEventListener('click', colorChange)
const deleteThisNoteButton = document.getElementById('svg-delete-button')
const textArea = document.getElementById('note')
const mainApp = document.getElementById('app')

function addNote() {
    let newNote = document.createElement('div')
    newNote.id = 'first-note'

    mainApp.appendChild(newNote)
}