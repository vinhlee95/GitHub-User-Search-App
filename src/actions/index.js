import { FETCH_USERS } from './types';
import axios from 'axios';
const ROOT_URL = "https://api.github.com/search/users";

export const fetchUsers = (user) => {
   const url = `${ROOT_URL}?q=${user}`;
   const request = axios.get(url);

   return {
      type: FETCH_USERS,
      payload: request
   }
}