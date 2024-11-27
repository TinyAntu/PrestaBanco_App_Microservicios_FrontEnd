import httpClient from "../http-common";

//Microservicio Register
const register = (user) => {
    return httpClient.post("api/register/register", user);
}

const login = (credentials) => {
    return httpClient.post("api/register/login", credentials);
}

export default { register, login };