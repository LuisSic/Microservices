import { Subjects, Publisher, PaymentCreatedEvent } from '@blackteam/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
