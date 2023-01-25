import { describe, expect, it } from 'vitest';
import onlyNumbers from '.';

describe('removeAccents', () => {
  it('Deve remover todos os caracteres especiais do CPF', () => {
    const cpf = '132.839.830-70';

    const res = onlyNumbers(cpf);
    expect(res).toBe('13283983070');
  });

  it('Deve remover todos os caracter especiais de CNPJ', () => {
    const cnpj = '51.243.504/0001-73';

    const res = onlyNumbers(cnpj);
    expect(res).toBe('51243504000173');
  });
});
