import axios from 'axios';

export const submitReferral = (data) => axios.post('http://localhost:5000/api/referral', data);