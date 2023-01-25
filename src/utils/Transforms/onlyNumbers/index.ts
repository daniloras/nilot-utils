const onlyNumbers = (value: string): string => {
  const valueFormatted = value.replace(/[^0-9]*/g, '');
  return valueFormatted;
};

export default onlyNumbers;
