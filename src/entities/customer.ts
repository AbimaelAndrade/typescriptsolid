import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  CustomerProtocol,
} from './protocols';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerProtocol {
  constructor(
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly cpf: string,
  ) {}

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerProtocol {
  constructor(public readonly name: string, public readonly cnpj: string) {}

  getName(): string {
    return this.name;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
