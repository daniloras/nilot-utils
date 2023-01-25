import { describe, expect, it } from 'vitest';
import { faker } from '@faker-js/faker';

import addOrRemoveAttributes from 'src/utils/Transforms/addOrRemoveAttributes';

describe('addOrRemoveAttributess', () => {
  it('Deve renomear as KEYS do objeto em formato camelCase', () => {
    const fakeObject = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      ip: faker.internet.ip(),
    };

    const list = ['email', 'ip'];

    const res = addOrRemoveAttributes(fakeObject, list, 'ADD');
    expect(res).toMatchObject({ email: fakeObject.email, ip: fakeObject.ip });
  });
});

describe('removeAttibutes', () => {
  it('Deve remover um ou mais atributos de um objecto', () => {
    const fakeObject = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
      ip: faker.internet.ip(),
    };

    const list = ['email', 'ip'];

    const res = addOrRemoveAttributes(fakeObject, list, 'REMOVE');
    expect(res).toMatchObject({ name: fakeObject.name });
  });
});
