import axios from './axiosConfig';

class icyecomServices {
    login(data) {
        return axios.post("/login", data);
    }
    register(data) {
        return axios.post("/sign-up", data)
    }
    profile(data) {
        return axios.get("/me", data)
    }
}

export default new icyecomServices();