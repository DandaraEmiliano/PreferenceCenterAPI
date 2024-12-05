import { Router } from 'express';
import userRoutes from '../routes/user.routes';
import eventRoutes from '../routes/event.routes';

const router = Router();

router.use('/users', userRoutes);
router.use('/events', eventRoutes);

export default router;
