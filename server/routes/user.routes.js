import { Router } from "express";
import ctlUser from '../controllers/user.conrollers.js'
const router = Router();


router.get('/',ctlUser.getUsers);

router.get('/:id',ctlUser.getUser);

router.post('/',ctlUser.createUser);

router.put('/:id',ctlUser.updateUser);

router.delete('/:id',ctlUser.deleteUser);


export default router;
