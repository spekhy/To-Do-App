const bigAddButton = document.getElementById('but-add-note').addEventListener('click', addNote)
const resetButton = document.getElementById('but-reset')
const colorChangeButton = document.getElementById('but-color-change')
const notesList = document.getElementById('notes')
const inNote = document.getElementById('first-note')
let textAreaInput = document.getElementById('note')
textAreaInput = document.querySelector('note')

//kompletne pridanie nastylovaneho notu, po kliku na velke PLUS
function addNote() {
    let newNote = document.createElement('div') //toto spravi hlavne divko kde sa daju zvysne casti
    newNote.className = 'first-note-cl'
    notesList.appendChild(newNote)

    let newNoteBlueTopPart = document.createElement('div') //toto prida hornu modru cast s tlacitkom X
    newNoteBlueTopPart.className = 'blue-top-cl'
    newNote.appendChild(newNoteBlueTopPart)

    let newNoteInputSpace = document.createElement('textarea') //toto prida cast kde sa bude dat pisat poznamky
    newNoteInputSpace.className = 'note-cl'
    newNote.appendChild(newNoteInputSpace)

    let newNoteDeleteButton = document.createElement('button') //toto prida button na odstranovanie jednotlivych notov
    newNoteDeleteButton.className = 'svg-delete-button-cl'
    newNoteBlueTopPart.appendChild(newNoteDeleteButton)

    let newNoteDeleteButtonSvg = document.createElement('img') //toto prida svg X do modrej casti hore
    newNoteDeleteButtonSvg.src = './assets/add-note.svg'
    newNoteDeleteButtonSvg.className = 'svg-delete'
    newNoteDeleteButton.appendChild(newNoteDeleteButtonSvg)

    newNoteDeleteButton.addEventListener('click', function() { //toto odstrani note na ktorom clovek dal X
        notesList.removeChild(newNote)
    })
    
}






/*
Array.from(document.querySelectorAll('[data-expand]'), (input) => {
    let parent = input.newNoteInputSpace

    function updateSize() {
        parent.dataset.value = input.value
    }
    input.addEventListener('input', updateSize)
    updateSize()
})

textAreaInput.addEventListener('keydown', autoSize)

function autoSize() {
    textAreaInput.style.cssText = 'height:auto; padding:0'
    textAreaInput.style.cssText = 'height:' + textAreaInput.scrollHeight + 'px'
}

*/