import httpClient from "../http-common";

//Microservicio Simulate

const simulate = (capital, interest, years) => {
    return httpClient.get("api/simulate/simulation", {
        params: {
            capital,
            annual_interest: interest, 
            years,
        },
    });
};

//Microservicio Request

const create = (data, userId) => {
    return httpClient.post(`api/request/create?userId=${userId}`, data, {
        headers: {
            'Content-Type': 'application/json', 
        },
    });
};

// Microservicio EvaluateCredit

const getAll = () => {
    return httpClient.get('api/evaluate/getAll');
}


const evaluateStep1 = (creditId) => {
    return httpClient.get(`api/evaluate/R1/${creditId}`);
};

const evaluateStep4 = (creditId) => {
    return httpClient.get(`api/evaluate/R4/${creditId}`);
};

const evaluateStep5 = (creditId) => {
    return httpClient.get(`api/evaluate/R5/${creditId}`);
};

const evaluateStep6 = (creditId) => {
    return httpClient.get(`api/evaluate/R6/${creditId}`);
};

const totalCost = (creditId) =>{
    return httpClient.get(`api/evaluate/total/${creditId}`);
};

const update = (id, creditData) => {
    return httpClient.put(`api/evaluate/update/${id}`, creditData);
};

// Microservicio creditFollow

const getAllById = (userId) => {
    return httpClient.get(`api/follow/creditlist/${userId}`);
};

const follow1 = (creditId) =>{
    return httpClient.get(`api/follow/E1/${creditId}`);
};



export default{simulate, create, getAll, evaluateStep1, follow1, update, getAllById, evaluateStep4,evaluateStep5, evaluateStep6, totalCost};