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
    const titleInput = document.querySelector('#title')
    const bodyInput = document.querySelector('#body')
    const idInput = document.querySelector('#note-id')
    const userInput = document.querySelector('#user')
    titleInput.value = newNote.title
    bodyInput.value = newNote.body
    idInput.value = newNote.id
    userInput.value = newNote.user
  }

  readEditInput() {
    const title = document.querySelector('#title').value
    const body = document.querySelector('#body').value
    const id = document.querySelector('#note-id').value
    const user = document.querySelector('#user').value
    const data = {title, body, id, user};
    return data;
  }

  renderUpdatedNote(note) {
    const newNote = new Note(note)
    newNote.updateNote();
    newNote.mainNote();
  }

  deleteNote(id) {
    const li = document.querySelector(`#note-${id}`);
    const mainDisplay = document.querySelector('#main');
    mainDisplay.innerHTML = "<h2>Your Notes Are Gone. You're going to fail!</h2>";
    li.parentNode.removeChild(li);
  }
  renderNew(){
    const mainDisplay = document.querySelector('#main');
    const newNote = new Note({title:null, body:null, id:null, user:null});
    mainDisplay.innerHTML += newNote.makeForm();
    const newForm = document.querySelector('form');
    newForm.id= "new-note";
    console.log(newForm);
  }
}
