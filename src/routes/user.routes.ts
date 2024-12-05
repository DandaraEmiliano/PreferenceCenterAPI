import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);
router.delete('/:id', UserController.deleteUser);

export default router;
