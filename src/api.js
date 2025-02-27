import axios from 'axios';

export const submitReferral = (data) => axios.post('https://accredian-backend-dvof.onrender.com', data);