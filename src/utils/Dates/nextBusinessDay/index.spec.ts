import { describe, expect, it, test } from 'vitest';

import Payments from 'src/utils/Dates/nextBusinessDay';

const mockDates = [
  {
    dateInput: '2022-11-01',
    dateOutput: '2022-11-03',
    description: '-> Próximo dia é feriado',
  },
  {
    dateInput: '2022-12-05',
    dateOutput: '2022-12-06',
    description: '-> Próxima dia é útil',
  },
  {
    dateInput: '2022-12-16',
    dateOutput: '2022-12-19',
    description: '-> Próximo dia é sábado',
  },
  {
    dateInput: '2022-12-10',
    dateOutput: '2022-12-12',
    description: '-> Próximo dia é domingo',
  },
  {
    dateInput: '2022-12-29',
    dateOutput: '2022-12-30',
    description: '-> Próximo dia é útil',
  },
  {
    dateInput: '2022-12-30',
    dateOutput: '2023-01-02',
    description: '-> Próximo dia é sábado e novo ano',
  },
  {
    dateInput: '2023-04-28',
    dateOutput: '2023-05-02',
    description: '-> Próximo dia é final de semana e tem feriado em seguida',
  },
];

describe('✅ Payments', () => {
  const payments = new Payments();

  test('Deve existir uma função definida: WhichPaymentDate() ✔', () => {
    expect(typeof payments.WhichPaymentDate).toBe('function');
  });

  mockDates.map((item, i) => {
    it(`${i + 1} - Deve retornar sucesso! Com base em datas pré definidas. ${item.description} ✔`, async () => {
      expect(
        await payments.WhichPaymentDate({
          date: item.dateInput,
        })
      ).toStrictEqual({
        datePayment: item.dateOutput,
      });
    });
  });
});
