import { NotificationSender } from "./NotificationSender.js";

export class EmailNotificationSender extends NotificationSender {
  constructor(client) {
    super();
    this.client = client;
  }

  send(userDto) {
    console.log(` Enviando email a ${userDto.email}`);
  }
}
