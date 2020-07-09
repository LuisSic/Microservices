import { Subjects, Publisher, OrderCancelledEvent } from '@blackteam/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
