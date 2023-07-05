import express from 'express';

import {addUser, getUsers, getUser, editUser, deleteUser} from '../controller/user-controller.js';

const Routes = express.Router();

Routes.post('/add', addUser);
Routes.get('/all', getUsers);
Routes.get('/:name', getUser);
Routes.post('/:name', editUser);
Routes.delete('/:name', deleteUser);

export default Routes;