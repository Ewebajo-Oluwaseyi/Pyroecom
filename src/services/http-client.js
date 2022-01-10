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
    edit(data, headers) {
        return axios.put("/update", data, headers)
    }
    noti(headers) {
        return axios.get("/notifications", headers)
    }
    dashboard(headers) {
        return axios.get("/dashboard", headers)
    }
}

export default new icyecomServices();