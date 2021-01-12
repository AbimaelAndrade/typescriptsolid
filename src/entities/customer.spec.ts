import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createSutIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createSutEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createSutIndividualCustomer(
      'Fulano',
      'Silva',
      '999.999.999-99',
    );

    expect(sut).toHaveProperty('firstName', 'Fulano');
    expect(sut).toHaveProperty('lastName', 'Silva');
    expect(sut).toHaveProperty('cpf', '999.999.999-99');
  });

  it('should have methods to get name and idn for individual customer', () => {
    const sut = createSutIndividualCustomer(
      'Fulano',
      'Silva',
      '999.999.999-99',
    );

    expect(sut.getName()).toBe('Fulano Silva');
    expect(sut.getIDN()).toBe('999.999.999-99');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createSutEnterpriseCustomer('ABC LTDA', '999.999.999/9999');

    expect(sut).toHaveProperty('name', 'ABC LTDA');
    expect(sut).toHaveProperty('cnpj', '999.999.999/9999');
  });

  it('should have methods to get name and idn for enterprise customer', () => {
    const sut = createSutEnterpriseCustomer('ABC LTDA', '999.999.999/9999');

    expect(sut.getName()).toBe('ABC LTDA');
    expect(sut.getIDN()).toBe('999.999.999/9999');
  });
});
