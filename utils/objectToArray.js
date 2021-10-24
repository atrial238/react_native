export const objectToArray = (object) => {
  return Object.entries(object).map((item) => ({
    ...item[1],
    id: item[0],
  }));
};
