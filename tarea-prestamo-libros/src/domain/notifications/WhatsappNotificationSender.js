import { NotificationSender } from "./NotificationSender.js";

export class WhatsappNotificationSender extends NotificationSender {
  constructor(client) {
    super();
    this.client = client;
  }

  send(userDto) {
    console.log(` Enviando WhatsApp a ${userDto.name}`);
  }
}
