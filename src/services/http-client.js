import axios from './axiosConfig';

class icyecomServices {
    login(data) {
        console.log(data)
        return axios.post("/login", data);
    }
    register() {
        return axios.post("/register")
    }
}

export default new icyecomServices();