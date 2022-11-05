import axios from "axios";

export const api = axios.create({
    baseURL: 'http://ec2-3-83-235-209.compute-1.amazonaws.com:8000'
})

export const loginSession = async (username, password) =>{
    return api.post("/login/", {username, password})
}

export const getLivros = async () => {
    return api.get("/livros/" )
}

export const getEmprestimo = async () => {
    return api.get("/emprestimos/" )
}

export const getUser = async () => {
    return api.get("/lists/" )
}