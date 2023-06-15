import API from "./apiUrl";
import axios from "axios";

const sign = async (send) =>
  await axios
    .post(API + "/addUser", send, { timeout: 6000 })
    .then((data) => data.data);

export default sign;
