import express from 'express'; // Importa o framework Express para construir aplicações web
import multer from 'multer'; // Importa o middleware Multer para lidar com dados multipart/form-data (comumente usado para uploads)
import { listarPosts, postarNovoPost, uploadImagem } from '../controllers/postsController.js'; // Importa funções de outro arquivo (provavelmente postsController.js) que lidam com a lógica de posts

// Configuração do Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) { // Define a pasta de destino para os arquivos enviados
    cb(null, 'uploads/'); // Define 'uploads/' como a pasta de destino
  },
  filename: function (req, file, cb) { // Define o nome do arquivo enviado
    cb(null, file.originalname); // Usa o nome original fornecido pelo usuário
  }
});

// Cria uma instância do Multer com a configuração de armazenamento definida
const upload = multer({
  dest: "./uploads", // (Comentado) Define a pasta de destino (substituída pela configuração de storage)
  storage, // Usa a configuração de storage definida acima
});

// Define as rotas da aplicação
const routes = (app) => {
  app.use(express.json()); // Habilita o middleware para analisar o corpo de requisições JSON
  app.get('/posts', listarPosts); // Rota para buscar todos os posts (função definida em postsController.js)
  app.post("/posts", postarNovoPost); // Rota para criar um post (função definida em postsController.js)
  app.post("/upload", upload.single("imagem"), uploadImagem); // Rota para upload de imagem. O middleware 'upload.single("imagem")' processa um único arquivo chamado 'imagem'. A função 'uploadImagem' (definida em postsController.js) lida com o arquivo enviado.
}

export default routes; // Exporta a função 'routes' para ser usada em outro arquivo