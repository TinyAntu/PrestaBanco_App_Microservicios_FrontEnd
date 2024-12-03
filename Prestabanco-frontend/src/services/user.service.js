import httpClient from "../http-common";

//Microservicio Register
const register = (user) => {
    return httpClient.post("api/register/register", user)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
};

const login = (credentials) => {
    return httpClient.post("api/register/login", credentials);
}

export default { register, login };