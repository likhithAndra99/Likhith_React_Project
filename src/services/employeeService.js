const STORAGE_KEY = "employees";

export const getEmployees = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

export const saveEmployees = (employees) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
};

export const addEmployee = (employee) => {
  const employees = getEmployees();
  employees.push(employee);
  saveEmployees(employees);
};

export const updateEmployee = (updated) => {
  let employees = getEmployees();
  employees = employees.map(emp => emp.id === updated.id ? updated : emp);
  saveEmployees(employees);
};

export const deleteEmployee = (id) => {
  let employees = getEmployees();
  employees = employees.filter(emp => emp.id !== id);
  saveEmployees(employees);
};
