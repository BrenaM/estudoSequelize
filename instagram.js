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

// Usuario.create({
//     nome: 'Julia',
//     email: 'jujuba@digitalhouse.com',
//     senha: 'juli123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'Mariana',
//     email: 'mari@digitalhouse.com',
//     senha: 'marianaconta10'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'Bartolomeu',
//     email: 'bart@digitalhouse.com',
//     senha: 'bartinhodobrega123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'João',
//     email: 'jao@digitalhouse.com',
//     senha: 'jojoaozinho123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create({
//     nome: 'Brena',
//     email: 'brena@email.com',
//     senha: 'b123na'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

    /**ATUALIZAR */
// Usuario.update({
//     senha: 'novasenha123'
// }, {
//     where: {
//         id: 8
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

        /**DELETAR */
// Usuario.destroy({
//     where: {
//         id: 6
//     }
// }).then((resultado) => {
//     console.log(resultado);
// })

Usuario.findAll().then((usuarios) => {
    console.table(usuarios.map((usuario) => usuario.toJSON()));
})
    /**Criando um posto no meu id */
// Post.create({
//     texto: 'Oieee, to com fome!',
//     img: null,
//     usuarios_id: 18,
//     n_likes: 5
// }).then ((resultado) => {
//     console.log(resultado.toJSON());
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