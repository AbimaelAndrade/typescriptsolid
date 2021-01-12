import { RepositoryProtocol } from '../entities/protocols';

export class Repository implements RepositoryProtocol {
  saveOrder(): void {
    console.log(`Your order was saved`);
  }
}
