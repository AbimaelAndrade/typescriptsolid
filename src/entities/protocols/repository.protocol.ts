import { OrderProtocol } from './order.protocol';

export interface RepositoryProtocol {
  saveOrder(order: OrderProtocol): void;
}
