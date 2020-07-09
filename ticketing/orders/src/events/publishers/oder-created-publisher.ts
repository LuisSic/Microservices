import { Publisher, OrderCreatedEvent, Subjects } from '@blackteam/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
