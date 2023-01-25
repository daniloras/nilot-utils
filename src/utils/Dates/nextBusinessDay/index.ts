import { addDays, format, isWeekend, nextMonday, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { holidays } from 'src/utils/Dates/nextBusinessDay/index.holidays.data';

import {
  DateIsHolidayReqProps,
  DateIsHolidayResProps,
  WhichPaymentDateReqProps,
  WhichPaymentDateResProps,
} from 'src/utils/Dates/nextBusinessDay/index.interface';

export default class NextBusinessDay {
  async WhichPaymentDate({ date }: WhichPaymentDateReqProps): Promise<WhichPaymentDateResProps> {
    const parsedDate = addDays(parseISO(date), 1);
    /**
     * @description: Verificar se caso for final de semana deverá agendar para próxima segunda feira, ou retornar o dia da semana caso não seja final de semana
     * Dados de entrada possíveis: (Domingo, Segunda, Terça, Quarta, Quinda, Sexta e Sábado)
     * Dados de saída possíveis: (Segunda, Terça, Quarta, Quinda, Sexta)
     */

    const conditionalIsWeekend: boolean = isWeekend(new Date(parsedDate));

    const trx = {
      weekday: conditionalIsWeekend
        ? format(nextMonday(new Date(parsedDate)), 'EEEE').toUpperCase()
        : format(parsedDate, 'EEEE').toUpperCase(),
      date: conditionalIsWeekend ? nextMonday(new Date(parsedDate)) : parsedDate,
    };
    const datePayment = await this.NextBusinessDay(trx.date);
    return {
      datePayment: format(datePayment, 'yyyy-MM-dd', {
        locale: ptBR,
      }),
    };
  }

  async NextBusinessDay(date: Date): Promise<Date> {
    const verifyHoliday = await this.DateIsHoliday({
      date: format(new Date(date), 'yyyy-MM-dd'),
    });
    if (!verifyHoliday.isHoliday) {
      return date;
    }
    const weekDay = format(new Date(date), 'EEEE').toUpperCase();

    if (['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY'].includes(weekDay)) {
      return this.NextBusinessDay(addDays(date, 1));
    }
    if (['FRIDAY'].includes(weekDay)) {
      return this.NextBusinessDay(addDays(date, 3));
    }
  }

  async DateIsHoliday({ date }: DateIsHolidayReqProps): Promise<DateIsHolidayResProps> {
    const year = Number(date.split('-')[0]);

    const filterYear = holidays.filter((item) => item.year === year);

    // Caso o ano não for encontrado
    if (filterYear.length === 0) {
      return {
        isHoliday: false,
        nameHoliday: null,
      };
    }
    const verifyIsHoliday = filterYear[0].holidays.filter((item) => item.date === date);

    const isHoliday: boolean = verifyIsHoliday.length === 1 ? true : false;

    return {
      isHoliday,
      nameHoliday: isHoliday ? verifyIsHoliday[0].localName : null,
    };
  }
}
