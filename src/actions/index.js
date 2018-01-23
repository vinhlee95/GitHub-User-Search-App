import { FETCH_USERS } from './types';
import axios from 'axios';
const ROOT_URL = "https://api.github.com/search/users";

export const fetchUsers = (user) => {
   const url = `${ROOT_URL}?q=${user}`;

   //implementing redux thunk
   return (dispatch) => {
      axios.get(url).then(response => {
         dispatch({
            type: FETCH_USERS,
            payload: response
         })
      });
   }
}