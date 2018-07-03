const Note = ( (note) => {
  return class{
    constructor(note) {
    this.id = note.id;
    this.title = note.title;
    this.body = note.body;
    this.user = note.user;
  }

  sideBarEl() {
    return `<li><a href="#" data-id="${this.id}">${this.title}</a></li>`
  }

  mainNote() {
    return `<h2>${this.title}</h2><p>${this.body}</p>
    <br>
    <button id="render-form" data-id='${this.id}'>Edit</button>`
  }

  makeForm() {
    return `
    <div>
    <form id='edit-form'>
      <p><label for="title"> title: </label>
      <input type='text' id= 'title' value=${this.title}></p>
      <p><label for="body"> body: </label>
      <textarea id="body" name="body" form="edit-form" style="width: 300px; height: 200px">${this.body}</textarea></p>
      <input id="note-id" type='hidden' name='id' value=''>
      <input id="user" type='hidden' name='userId' value=''>
      <p><input id="edit-form" type="submit" value="Submit" ></p>
      </form>
      </div>
    `

  }


}
})();
