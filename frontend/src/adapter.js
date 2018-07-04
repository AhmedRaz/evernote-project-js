

class Adapter {

  getNotes() {
    const baseURL = `http://localhost:3000/api/v1/notes`;
    return fetch(baseURL)
      .then(response => response.json());
  }

  getNote(id) {
    const baseURL = `http://localhost:3000/api/v1/notes/${id}`;
    return fetch(baseURL)
      .then(response => response.json());
  }

  updateNote(data) {
    const baseURL = `http://localhost:3000/api/v1/notes/${data.id}`
    delete data.id;
    delete data.user;
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
        },
    body: JSON.stringify(data)
    }
    return fetch(baseURL, options)
    .then(r => r.json())

  }

  deleteNote(id) {
    const baseURL = `http://localhost:3000/api/v1/notes/${id}`
    const options = {
      method: 'DELETE'
      }
    return fetch(baseURL, options)
    .then(r => r.json())

  }


}
