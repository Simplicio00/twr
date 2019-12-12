import Axios from 'axios';



export const apiFormDataClassificado = Axios.create({
    baseURL: "https://localhost:5001/api/Classificado" ,
    headers: {
        "Authorization" : "Bearer " + localStorage.getItem("autenticarlogin")
    }
})

export const apiFormData = Axios.create({
    baseURL: "https://localhost:5001/api/userImage" ,
    headers: {
        "Authorization" : "Bearer " + localStorage.getItem("autenticarlogin")
    }
})