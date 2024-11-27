import httpClient from "../http-common";


//Metodos dentro del Microservicio FollowCredit
const create = (data) => {
    return httpClient.post("/api/docs/create", data, {
        headers: {
            "Content-Type": "application/json"
        }
    });
};

const getDocumentsByCreditId = (creditId) => {
    return httpClient.get(`/api/docs/doclist/${creditId}`);
};

const downloadDocument = (id) => {
    return httpClient.get(`/api/docs/download/${id}`, {
        responseType: 'blob' 
    });
};

export default{create, getDocumentsByCreditId, downloadDocument}