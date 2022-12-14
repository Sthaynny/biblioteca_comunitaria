import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8000/'
})

export const loginSession = async (username, password) => {
    return api.post("/login/", { username, password })
}

export const getUser = async () => {
    return api.get("/users/")
}

export const cadastrarUsuario = async (username , email, password,) => {
    return api.post("/users/", { username, email ,password ,})
}

export const getLivros = async (id) => {
    return api.get("/livro/" + (id ?? ''))
}

export const cadastrarLivro = async (titulo, descricao, autor, base64) => {
    return api.post("/livro/", { titulo, descricao, autor, base64 })
}
export const editarLivro = async (id, titulo, descricao, autor, base64,) => {
    return api.put("/livro/" + id + '/', { id, titulo, descricao, autor, base64 })
}
export const excluirLivro = async (id) => {
    return api.delete("/livro/" + id + '/')
}

export const getEmprestimos = async () => {
    return api.get("/emprestimo/")
}

export const getMeusEmprestimo = async () => {
    return api.get("/lists/")
}
 