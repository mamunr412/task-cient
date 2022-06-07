
export const LOAD_USERS_LOADING = 'REDUX_THUNK_LOAD_USERS_LOADING';
export const LOAD_USERS_SUCCESS = 'REDUX_THUNK_LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'REDUX_THUNK_LOAD_USERS_ERROR';


const APi = 'https://jsonplaceholder.typicode.com/todos'


export const loadUsers = () => dispatch => {
  dispatch({ type: LOAD_USERS_LOADING });
  APi.getUsers()
      .then(response => response.json())
      .then(
          data => {
            console.log(data)
            dispatch({ type: LOAD_USERS_SUCCESS, data })},
          error => dispatch({ type: LOAD_USERS_ERROR, error: error.message || 'Unexpected Error!!!' })
      )
};