import axios from 'axios';

export const token = '74|Pf1i5P57sQAa1CLR1nDmV6Ia9tVvGYbT8E69Jd2B4f11aa30';

const instance = axios.create({
    baseURL: 'https://cube-academy-api.cubeapis.com/api', // Replace with your API endpoint
});

// Create a function to set the Bearer Token
export const setBearerToken = (token) => {
    if (token) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete instance.defaults.headers.common['Authorization'];
    }
};

setBearerToken(token);

export default instance;
