import { Router } from "express";
import ctlLogin from '../controllers/login.controllers.js'
const router = Router();


router.post('/',ctlLogin.validateUsers);



export default router;