const sequelize = require('sequelize');        //importa seguelise
const config = require('./config/config');      //importa configuração
const conexaoDB = new sequelize(config);   //cria conexao com o banco de dados

conexaoDB.query('SELECT * FROM pets', sequelize.QueryTypes.SELECT)
.then((data) => {
    console.log(data);
    conexaoDB.close();
})
.catch((error) => {
    console.log(error);
});