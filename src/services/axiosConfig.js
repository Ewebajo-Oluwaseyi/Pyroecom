import axios from "axios";

export default axios.create({
  baseURL: "https://pyroecom.herokuapp.com/api/influencer",
  headers: {
    "Content-Type": "application/json",
  },
});
