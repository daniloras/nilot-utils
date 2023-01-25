import { describe, expect, it } from 'vitest';

import formatPriceBl from '.';

describe('formatPriceBl -> should format number & float values properly', () => {
  it('should format valid integer into price', () => {
    const sut = formatPriceBl(10);
    expect(sut).toBe('R$\xa010,00');
  });

  it('should f                                                                                                                                                                            ,,ormat valid float into price', () => {
    const sut = formatPriceBl(10.47);
    expect(sut).toBe('R$\xa010,47');
  });

  it('should round float values into 2 decimals places', () => {
    const sut = formatPriceBl(10.4567);
    expect(sut).toBe('R$\xa010,46');
  });
});
