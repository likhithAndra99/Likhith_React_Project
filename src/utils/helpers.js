export const generateEmployeeId = () => {
  return "EMP" + Math.floor(Math.random() * 100000);
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString();
};
