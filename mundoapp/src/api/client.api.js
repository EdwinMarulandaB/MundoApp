import axios from 'axios'

export const createUserRequest = async (data) =>
   await axios.post(`http://localhost:3000/user`,data)