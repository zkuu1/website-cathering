import express from "express";
import { getUsers,
    getUserById
 } from '../controller/UserController.js';

const Router = express.Router();

// Route untuk mendapatkan daftar user
Router.get('/users', getUsers);
Router.get('/users/:id', getUserById);

export default Router;
