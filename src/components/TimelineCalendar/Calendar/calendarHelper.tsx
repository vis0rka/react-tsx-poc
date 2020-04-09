export const getDays = () => {
  return ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];
};

const firstSundayOfNextMonthWithDiff = (monthDate: Date) => {
  const date = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);
  return new Date(date.getFullYear(), date.getMonth() + 1, (7 - date.getDay()) % 7);
};

const lastMondayOfPrevMonthWithDiff = (monthDate: Date) => {
  const date = new Date(monthDate.getFullYear(), monthDate.getMonth(), 0);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - (date.getDay() - 1));
};

export const getDaysFromLastMonToFirstSunWithDiff = (monthDate: Date) => {
  const dateArray = [];
  const startDate = lastMondayOfPrevMonthWithDiff(monthDate);
  const endDate = firstSundayOfNextMonthWithDiff(monthDate);
  let currentDate = startDate;
  while (currentDate <= endDate) {
    dateArray.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dateArray;
};

