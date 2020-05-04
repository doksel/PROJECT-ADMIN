import { KeyboardEvent } from "react";

export const required = (value: string) =>
  (value && typeof value === "string" && !value.match(/^\s+$/)) ||
  (value && typeof value !== "string")
    ? undefined
    : "Обов'язково для заповнення";

export const hardpassword = (value: string) =>
  value &&
  value.length >= 6 &&
  value.match(
    /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/
  )
    ? undefined
    : "Пароль має складатися не менше ніж з 6 символів та повинен містити великі та маленькі латинські літери, цифри та спеціальні символи.";

export const checkPasswords = (value: string, form: any) =>
  form.password !== form.re_password
    ? "Пароль повинен бути однаковий"
    : undefined;

export const required_RadioButton = (value: string) =>
  typeof value === "boolean" ? undefined : "Обов'язково для заповнення";

export const required_Series_Of_Doc = (value: string) =>
  value || typeof value === "number"
    ? undefined
    : "Серія обов'язково для заповнення";

export const required_files = (value: string) =>
  value && value.length > 0 ? undefined : "Обов'язково для заповнення";

export const letter_Series_Of_Doc = (value: string) =>
  value && !value.match(/^[A-Za-zА-Яа-яЁё]+$/)
    ? "Серія містить тільки літери"
    : value && (value.length > 3 || value.length < 2)
    ? `У серії повинно бути 2 або 3 символи`
    : undefined;

export const required_Number_Of_Doc = (value: string) =>
  value || typeof value === "number"
    ? undefined
    : "Номер обов'язково для заповнення";

export const required_UNZR = (value: string) =>
  value === "" ||
  value === null ||
  value === undefined ||
  (value && value.match(/\d{8}(-)\d{5}/) && value.length === 14)
    ? undefined
    : "УНЗР маэ формат 00000000-00000";

export const number_Number_Of_Doc = (value: string) =>
  value && isNaN(Number(value))
    ? "Номер містить тільки цифри"
    : value.length !== 6
    ? `Повинно бути 6 символів`
    : undefined;

export const numberPaymentDoc = (value: string) =>
  value === "" ||
  value === null ||
  value === undefined ||
  (value && /[^a-zA-Z0-9 -]/i.test(value))
    ? "Тільки латинські букви, цифри, тире і пробіл"
    : undefined;

export const maxValue = (max: number) => (value: string) =>
  value === "" ||
  value === null ||
  value === undefined ||
  (value && +value <= max)
    ? undefined
    : `Значення повинно бути менше ${max}`;

export const maxValue1000000 = maxValue(1000000);

export const maxLength = (max: number) => (value: string) =>
  value === "" ||
  value === null ||
  value === undefined ||
  (value && value.length <= max)
    ? undefined
    : `Повинно бути ${max} символів чи менше`;

export const minLength = (min: number) => (value: string) =>
  value === "" ||
  value === null ||
  value === undefined ||
  (value && value.length >= min)
    ? undefined
    : `Повинно бути ${min} символів чи більше`;

export const maxLength60 = maxLength(10);

export const number = (value: string) =>
  value && isNaN(Number(value)) ? "Повинно бути числом" : undefined;

export const email = (value: string) =>
  value === "" ||
  value === null ||
  value === undefined ||
  (value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
    ? undefined
    : "Введіть коректну E-mail адресу";

export const letter = (value: string) =>
  value === "" ||
  value === null ||
  value === undefined ||
  (value && value.match(/^[A-Za-zА-Яа-яЁёІі]+$/))
    ? undefined
    : "Введіть тільки літери";

export const latinLetter = (value: string) =>
  value === "" ||
  value === null ||
  value === undefined ||
  (value && value.match(/^[A-Za-z'`-]+$/))
    ? undefined
    : "Введіть літери тільки латинською";

export const cyrillicLetter = (value: string) =>
  value === "" ||
  value === null ||
  value === undefined ||
  (value && value.match(/^[А-Яа-яЁёЇїІіЄєҐґ'`-]+$/))
    ? undefined
    : "Введіть літери тільки кирилицею";

export const cyrillicUaLetter = (value: string) =>
  value === "" ||
  value === null ||
  value === undefined ||
  (value && value.match(/^[А-Ща-щЬьЮюЯяЇїІіЄєҐґ'`-]+$/))
    ? undefined
    : "Введіть літери тільки українськоою";

export const cyrillicRuLetter = (value: string) =>
  value === "" ||
  value === null ||
  value === undefined ||
  (value && value.match(/^[А-Яа-яЁё]+$/))
    ? undefined
    : "Введіть літери тільки українськоою";

export const minValue = (min: number) => (value: string) =>
  value && +value < min ? `Повинно бути принаймні ${min}` : undefined;

export const alphaOnly = (e: KeyboardEvent) =>
  (e.charCode > 64 && e.charCode < 91) || (e.charCode > 96 && e.charCode < 123);

export const number_Taxpayer = (value: string) =>
  value && isNaN(Number(value))
    ? "Номер містить тільки цифри"
    : value && isNaN(Number(value)) && value.length !== 10
    ? "Номер містить 10 цифр"
    : undefined;

export const checkPaidAmount = (value: string, form: any) =>
  value && form.consularFee > +value
    ? "Фактично сплачена сума не повинна бути менше консульського збору"
    : undefined;

export const getAgeForDatepicker = (year = 0) => {
  type dateTypes = {
    defaultPickerValue?: Date;
    disabledDate?: any;
  };
  type myDateTypes = Date | any;

  let date: dateTypes = {};
  let day: number = 24 * 60 * 60 * 1000;
  var dateOffset: number = day * 365 * year + day * 3; //16 years
  var myDate: myDateTypes = new Date();

  myDate.setTime(myDate.getTime() - dateOffset);

  date.defaultPickerValue = new Date();

  date.defaultPickerValue.setTime(
    date.defaultPickerValue.getTime() - dateOffset - day
  );

  date.disabledDate = year ? Date.parse(myDate) : Date.now() + day;

  return date;
};

export const minus16Years_DatePicker = getAgeForDatepicker(16);

export const alphaNumeric = (value: string) =>
  value && /[^a-zA-ZА-Яа-яЁёЇїІіЄєҐґ'`0-9 ]/i.test(value)
    ? "Тільки буквено-цифрові символи"
    : undefined;
