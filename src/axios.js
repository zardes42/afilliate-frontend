import axios from 'axios' 

export const axiosAuth = axios.create({
    baseURL: 'https://heroku-test-afilliates.herokuapp.com/api/',
});
export const axiosJWT = axios.create({
    
    baseURL: 'https://heroku-test-afilliates.herokuapp.com/api/auth',
    
});
