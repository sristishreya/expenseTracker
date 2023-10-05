const Sequelize=require('sequelize');
const sequelize= new Sequelize('demo','root','password',{
    dialect: 'mysql',
    host:'localhost'
})



module.exports=sequelize