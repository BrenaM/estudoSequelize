const { Usuario, Post, Comentario, sequelize } = require('./models');
const {Op} = require('sequelize');


// Usuario.findAll()
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
//     //console.log(resultado.map(user => user.toJSON()));
   
// });

// Post.findAll()
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
//     //console.log(resultado.map(user => user.toJSON()));
   
// });

// Comentario.findAll()
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
//     //console.log(resultado.map(user => user.toJSON()));
   
// });

// Post.findAll({
//     where: {
//         //usuarios_id: 1
//         texto: {[Op.like]: 'oi%'}
//     }
// })
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON())); 
   
// });

// Usuario.findAll({
//     order:[
//         ['id', 'ASC']  //ASC=crescente DESC= decrescente
//     ],
//     limit: 2,  // de todos os resultados eu sóquero 2
//     offset: 2   //vai pular os dois primeiros e trazer 3 e 4
// })
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
//     //console.log(resultado.map(user => user.toJSON()));
   
// });

        //desafio
// Usuario.findAll({
//     where:{
//         nome: {[Op.like]: '%a%'}
//     }
// })
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON())); 
// });

// Usuario.findAll({
//     where:{
//         nome: {[Op.notLike]: '%a%'}
//     }
// })
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON())); 
// });

// for (let i= 0; i< 6; i+=2){
// Comentario.findAll({
//     order:[
//         ['id', 'ASC']  
//     ],
//     limit: 2, 
//     offset: i
// })
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON())); 
// });
// }


    /**CRIAR - Criando usuarios para todo mund do grupo */
// Usuario.create({
//     nome: 'Edson',
//     email: 'ed@avanade.com',
//     senha: 'edson123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

    /**ATUALIZAR */
// Usuario.update({
//     email: 'bart@avanade.com'
// }, {
//     where: {
//         id: 17
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

        /**DELETAR */
// Usuario.destroy({
//     where: {
//         id: 13
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })



    /**Criando um posto no meu id */
// Post.create({
//     texto: 'Oieee, to com fome!',
//     img: null,
//     usuarios_id: 18,
//     n_likes: 5
// });


// Post.findAll({

// })
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON())); 
// });

    /**Atualizando email de Sergio */
// Usuario.update({
//     email: 'sergio@digitalhouse.com'
// }, {
//     where: {
//         id: 2
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

    /**Deletando Felipe Veronesi */
// Usuario.destroy({
//     where: {
//         id: 3
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

    /**Mostrar Todos os usuários */
// Usuario.findAll().then((usuarios) => {
//     console.table(usuarios.map((usuario) => usuario.toJSON()));
// })

// Usuario.findByPk(1, {
//     include: [
//         {association: "posts"}
//     ]
// })
// .then((usuario) => {
//     console.table(usuario.posts.map((post) => post.toJSON()))
//     sequelize.close();
// })

//outro jeito
// Usuario.findByPk(1, {include: ['posts']}).then(
//     usuario => {
//         console.log(usuario.toJSON());
//         sequelize.close();
//     }
// )

Post.findByPk(1, {include: ['comentarios']})
.then(
    post => {
        console.table(post.toJSON());
        sequelize.close();
    }
)
