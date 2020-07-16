import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@blackteam/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
