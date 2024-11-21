import express from 'express'; // Importa o módulo Express para criar o servidor web
import routes from './src/routes/postsRoutes.js';

// const posts = [
//     {   
//         id: 1,
//         descricao: 'Uma foto teste',
//         imagem: 'https://placecats.com/millie/300/150'
//     },
//     {
//         id: 2,
//         descricao: 'Paisagem montanhosa',
//         imagem: 'https://placecats.com/millie/300/150'
//     },
//     {
//         id: 3,
//         descricao: 'Cachorro brincando',
//         imagem: 'https://placecats.com/millie/300/150'
//     },
//     {
//         id: 4,
//         descricao: 'Comida deliciosa',
//         imagem: 'https://placecats.com/millie/300/150'
//     },
//     {
//         id: 5,
//         descricao: 'Gato fazendo yoga',
//         imagem: 'https://placecats.com/millie/300/150'
//     },
//     {
//         id: 6,
//         descricao: 'Gato brincando',
//         imagem: 'https://placecats.com/millie/300/150'
//     }
// ];

const app = express(); // Cria uma instância do servidor Express
routes(app)

app.listen(3000, ()=>{ // Inicia o servidor na porta 3000
    console.log('Servidor escutando...'); // Imprime uma mensagem no console indicando que o servidor está ativo
});
