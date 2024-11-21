import { Sequelize, DataTypes } from "sequelize";
import db from "../config/database.js";


const User = db.define('users', {
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true 
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  freezeTableName: true 
});

// Fungsi untuk mensinkronkan database
const syncDatabase = async () => {
  try {
    await db.sync();
    console.log("Database synced successfully!");
  } catch (error) {
    console.error("Error syncing the database:", error);
  }
};

syncDatabase();

export default User;
