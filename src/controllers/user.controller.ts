import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }

  static async createUser(req: Request, res: Response) {
    const { email } = req.body;

    try {
      const user = await UserService.createUser(email);
      res.status(201).json(user);
    } catch (error) {
      const err = error as Error;
      res.status(400).json({ error: err.message });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await UserService.deleteUser(id);
      res.status(204).send();
    } catch (error) {
      const err = error as Error;
      res.status(500).json({ error: err.message });
    }
  }
}

export default UserController;
