import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8000/'
})

export const loginSession = async (username, password) => {
    return api.post("/login/", { username, password })
}

export const getLivros = async (id) => {
    return api.get("/livro/" + (id ?? ''))
}

export const cadastrarLivro = async (titulo, descricao, autor, base64, id) => {
    return api.post("/livro/"(id ?? ''), { titulo, descricao, autor, base64 })
}

export const getEmprestimo = async () => {
    return api.get("/emprestimos/")
}

export const getUser = async () => {
    return api.get("/lists/")
}