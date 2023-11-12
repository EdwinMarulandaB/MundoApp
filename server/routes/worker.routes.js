import { Router } from "express";
import ctlWorker from '../controllers/worker.conrollers.js'
const router = Router();


router.get('/',ctlWorker.getWorkers);

router.get('/:id',ctlWorker.getWorker);

router.post('/',ctlWorker.createWorker);

router.put('/:id',ctlWorker.updateWorker);

router.delete('/:id',ctlWorker.deleteWorker);


export default router;
