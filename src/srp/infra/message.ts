import { MessageProtocol } from "../entities/protocols";

export class Message implements MessageProtocol{
  sendMessage(msg: string): void {
    console.log(`Send message ${msg}`);
  }
}
