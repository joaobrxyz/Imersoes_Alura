import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts(); // Chama a função para obter todos os posts
    res.status(200).json(posts); // Envia os posts como resposta JSON com status 200 (OK)
} 