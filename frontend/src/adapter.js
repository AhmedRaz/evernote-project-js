

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
}
