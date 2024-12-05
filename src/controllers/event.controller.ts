import { Request, Response } from 'express';
import EventService from '../services/event.service';

class EventController {
  static async createEvent(req: Request, res: Response) {
    const { userId, consents } = req.body;

    try {
      const events = await Promise.all(
        consents.map(({ id, enabled }: { id: string; enabled: boolean }) =>
          EventService.createEvent(userId, id, enabled) 
        )
      );
      res.status(201).json(events);
    } catch (error) {
      const err = error as Error;
      res.status(400).json({ error: err.message });
    }
  }
}

export default EventController;
