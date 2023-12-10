const bigAddButton = document.getElementById('but-add-note').addEventListener('click', addNote)
const resetButton = document.getElementById('but-reset')
const colorChangeButton = document.getElementById('but-color-change')
const deleteThisNoteButton = document.getElementById('svg-delete-button')
const notesList = document.getElementById('notes')
const inNote = document.getElementById('first-note')

function addNote() {
    let newNote = document.createElement('div')
    newNote.className = 'first-note-cl'
    notesList.appendChild(newNote)

    let newNoteBlueTopPart = document.createElement('div')
    newNoteBlueTopPart.className = 'blue-top-cl'
    newNote.appendChild(newNoteBlueTopPart)

    let newNoteInputSpace = document.createElement('div')
    newNoteInputSpace.className = 'note-cl'
    newNote.appendChild(newNoteInputSpace)
}