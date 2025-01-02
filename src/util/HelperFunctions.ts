export const getHumanDiff = (startDate: string, endDate: string) => {
  let str = "";
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years > 0) {
    str += years + " year";
    if (years > 1) str += "s";
  }

  if (str.length > 0) str += ", ";

  if (months > 0) {
    str += months + " month";
    if (months > 1) str += "s";
  }

  return str;
}; 