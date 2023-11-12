import axios from 'axios'

export const createWorkerRequest = async (data) =>
   await axios.post(`http://localhost:3000/worker`,data)