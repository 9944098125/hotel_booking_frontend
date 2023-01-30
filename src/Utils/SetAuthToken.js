import api from "../Redux/Api/Api";

const SetAuthToken = (token) => {
  if (token) {
    console.log("set auth token: ", token);
    localStorage.setItem("token", token);
    api.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    localStorage.removeItem("token");
    delete api.defaults.headers.common["Authorization"];
  }
};

export default SetAuthToken;
