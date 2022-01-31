import axios from "axios";

export default axios.create({
  baseURL: "https://pyro.herokuapp.com/api/influencer",
  headers: {
    "Content-Type": "application/json",
  },
});
