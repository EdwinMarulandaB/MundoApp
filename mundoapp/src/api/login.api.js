import axios from 'axios'

export const logedRequest = async (data) =>
   await axios.post(`http://localhost:3000/login`,data)

   