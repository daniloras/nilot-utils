import { describe, expect, it } from 'vitest';
import { compareSync } from 'bcrypt';

import hashPasswordBcrypt from 'src/utils/Transforms/hashPasswordBcrypt';

describe('hashPasswordBcrypt', () => {
  it('Deve informar se a hash é válida de acordo com base em um senha informada e conversão da senha em hash', () => {
    const password = 'joséViana@123';

    const passwordHash = hashPasswordBcrypt.convertPassword(password);

    const validPassword = compareSync(password, passwordHash);

    expect(validPassword).toEqual(true);
  });
});
