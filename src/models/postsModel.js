import conectarAoBanco from "../config/dbConfig.js"; // Importa a função para conectar ao banco de dados

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco de dados usando a string de conexão do ambiente

export default async function getTodosPosts() { // Função assíncrona para obter todos os posts
    const db = conexao.db("imersao-instabyte"); // Seleciona o banco de dados "imersao-instabyte"
    const colecao = db.collection("posts"); // Seleciona a coleção "posts"
    return colecao.find().toArray() // Busca todos os documentos da coleção e retorna como um array
}