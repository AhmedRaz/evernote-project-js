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
    if (e.target.id === "new-note") {
      mainDisplay.innerHTML = '';
      notesController.renderNew();
      // Have to add a listener for the new form...somehow
      console.log(e);
    } else {
    adapter.getNote(e.target.dataset.id)
      .then((note) => {
        mainDisplay.innerHTML = ''
        notesController.renderNote(note);
      })
    }
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
          const data = notesController.readEditInput();
          adapter.updateNote(data).then(note => {
            notesController.renderUpdatedNote(note);

          });
          formSub.reset();
        })
        // return formSub;
      })

    } else if (e.target.id === 'delete-note') {
      adapter.deleteNote(e.target.dataset.id)
      .then(data => {
        notesController.deleteNote(data.noteId);
      }) else if (e.target)


    }






  })







});
