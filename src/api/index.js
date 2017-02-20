const CLIENT_ID = '696496976733-amvban71pqfcd0fobe80i8gvhp4p6r1j.apps.googleusercontent.com';
const SCOPES = ['https://www.googleapis.com/auth/tasks', 'https://www.googleapis.com/auth/plus.me'];

export default {
  authorize(params) {
    return new Promise((resolve, reject) => {
      gapi.auth.authorize(
        {
          'client_id': CLIENT_ID,
          'scope': SCOPES,
          'immediate': params.immediate,
          'cookie_policy': 'single_host_origin'
        },
        authResult => {
          if (authResult.error) {
            return reject(authResult.error);
          }
          return gapi.client.load('tasks', 'v1', () => gapi.client.load('plus', 'v1', () => resolve() ) );
        }
      );
    });
  },

  // Load task lists from google.com/tasks
  listTaskLists() {
    const request = gapi.client.tasks.tasklists.list();

    return new Promise((resolve, rejects) => {
      request.execute(resp => resolve(resp));
    });
  },

  // Insert task lists to google.com/tasks
  insertTaskList({ title }) {
    const request = gapi.client.tasks.tasklists.insert({
      title: title
    });

    return new Promise((resolve, reject) => {
      request.execute(resp => resolve(resp));
    });
  }
}
