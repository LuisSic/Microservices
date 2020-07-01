import { Listener } from './base-listener';
import { Message } from 'node-nats-streaming';
import { TicketCreatedEvent } from './ticket-created-event';
import { Subjects } from './subjects';

export class TicketCreatedLister extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = 'parments-service';
  onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    console.log('Even data!', data);

    msg.ack();
  }
}
