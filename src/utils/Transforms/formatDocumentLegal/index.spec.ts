import { describe, expect, it } from 'vitest';

import formatDocumentLegal from 'src/utils/Transforms/formatDocumentLegal';

describe('formatDocumentLegal', () => {
  it('Deve adicionar os pontos ao CPF', () => {
    const cpf = '13283983070';

    const res = formatDocumentLegal(cpf, 'CPF');
    expect(res).toBe('132.839.830-70');
  });

  it('Deve adicionar os pontos ao CNPJ', () => {
    const cnpj = '51243504000173';

    const res = formatDocumentLegal(cnpj, 'CNPJ');
    expect(res).toBe('51.243.504/0001-73');
  });
});
