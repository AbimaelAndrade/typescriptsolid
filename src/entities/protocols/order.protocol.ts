import { OrderStatusProtocol } from './order-status.protocol';

export interface OrderProtocol {
  orderStatus: OrderStatusProtocol;

  chekout(): void;
}
