import API from "./apiUrl";
import axios from "axios";

const axiosCheckVerify = async () =>
  await axios
    .post(
      API + "/checkVerify",
      {
        token: sessionStorage.getItem("user"),
      },
      { timeout: 8000 }
    )
    .then((data) => data.data);

export default axiosCheckVerify;
