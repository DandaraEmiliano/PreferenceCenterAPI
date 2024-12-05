import Event from '../models/event.model';

class EventRepository {
  static async createEvent(userId: string, consentId: string, enabled: boolean) {
    return await Event.create({ userId, consentId, enabled });
  }

  static async getEventsByUserId(userId: string) {
    return await Event.findAll({ where: { userId } });
  }

  static async deleteEventsByUserId(userId: string) {
    return await Event.destroy({ where: { userId } });
  }
}

export default EventRepository;
