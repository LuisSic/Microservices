import { Publisher, Subjects, TicketUpdatedEvent } from '@blackteam/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
