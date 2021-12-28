import axios from './axiosConfig';

class icyecomServices {
    login(data) {
        return axios.post("/login", data);
    }
    register(data) {
        return axios.post("/sign-up", data)
    }
}

export default new icyecomServices();