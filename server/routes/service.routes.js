import { Router } from "express";
import ctlService from '../controllers/service.controllers.js'
const router = Router();


router.post('/',ctlService.createService);
router.get('/',ctlService.getServices);



export default router;