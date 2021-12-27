import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.icyecom.com/api/influencer',
    headers: {
        'Content-Type': 'application/json',
    },
})

