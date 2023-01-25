export interface WhichPaymentDateReqProps {
  date: string;
}

export interface WhichPaymentDateResProps {
  datePayment: string;
}

export interface DateIsHolidayReqProps {
  date: string;
}

export interface DateIsHolidayResProps {
  isHoliday: boolean;
  nameHoliday: string | null;
}

interface HolidaysProps {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: null | string[];
  launchYear: null;
  type: string;
}

export interface HolidaysGroupProps {
  year: number;
  holidays: HolidaysProps[];
}
