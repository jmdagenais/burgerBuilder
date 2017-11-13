import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react.firebaseio.com/'
});

export default instance;