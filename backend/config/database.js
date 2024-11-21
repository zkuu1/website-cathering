import { Sequelize } from "sequelize";

const db = new Sequelize('cathering_db', 'root', '',{
    host : 'localhost',
    dialect : "mysql"

});

export default db;