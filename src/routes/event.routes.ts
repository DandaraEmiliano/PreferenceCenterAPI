import { Router } from 'express';
import EventController from '../controllers/event.controller';

const router = Router();

router.post('/', EventController.createEvent);

export default router;
