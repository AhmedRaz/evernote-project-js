document.addEventListener("DOMContentLoaded", function() {
  const adapter = new Adapter();
  const notesController = new NotesController();
  const sideBar = document.querySelector('#note-list');
  const mainDisplay = document.querySelector('#main');


  adapter.getNotes()
    .then(data => {
      sideBar.innerHTML = ``;
      data.forEach((note) => {
        notesController.renderSideBar(note);
      })
    })

  sidebar.addEventListener('click', (e) => {

    adapter.getNote(e.target.dataset.id)
      .then((note) => {
        mainDisplay.innerHTML = ''
        notesController.renderNote(note);
      })
  })

  mainDisplay.addEventListener('click', (e) => {

    // console.log(e);
    if (e.target.id === 'render-form') {
      adapter.getNote(e.target.dataset.id)
      .then((note) => {
        // mainDisplay.innerHTML = ''
        notesController.renderForm(note);
        const formSub = document.querySelector('#edit-form');
        console.log(formSub);
        formSub.addEventListener('submit', (e) => {

          e.preventDefault();
          notesController.readEditInput();
          formSub.reset();
        })
        // return formSub;
      })

    }






  })







});
