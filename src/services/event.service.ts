import EventRepository from '../repositories/event.repository';

class EventService {
  static async createEvent(userId: string, consentId: string, enabled: boolean) {
    if (!userId || !consentId || typeof enabled !== 'boolean') {
      throw new Error('Invalid event parameters');
    }

    const event = await EventRepository.createEvent(userId, consentId, enabled);
    return event;
  }
}

export default EventService;
