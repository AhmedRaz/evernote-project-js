class NotesController {

  renderSideBar(note){
    const newNote = new Note(note);
    const sideBar = document.querySelector('#note-list');
    sideBar.innerHTML += newNote.sideBarEl();
  }

  renderNote(note) {
    const newNote = new Note(note);
    const mainDisplay = document.querySelector('#main');
    mainDisplay.innerHTML += newNote.mainNote();
  }

  renderForm(note){
    const newNote = new Note(note);
    const mainDisplay = document.querySelector('#main');
    mainDisplay.innerHTML += newNote.makeForm();
  }

  readEditInput() {
    const title = document.querySelector('#title').value
    const body = document.querySelector('#body').value
    const id = document.querySelector('#note-id').value
    const user = document.querySelector('#user').value
    console.log(title, body, id, user);
  }
}
