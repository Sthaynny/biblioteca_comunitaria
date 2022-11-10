import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8000/'
})

export const loginSession = async (username, password) =>{
    return api.post("/login/", {username, password})
}

export const getLivros = async () => {
    return api.get("/livro/" )
}

export const getEmprestimo = async () => {
    return api.get("/emprestimos/" )
}

export const getUser = async () => {
    return api.get("/lists/" )
}