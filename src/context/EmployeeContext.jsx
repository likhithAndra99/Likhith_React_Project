import { createContext, useContext, useEffect, useState } from "react";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee
} from "../services/employeeService";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(getEmployees());
  }, []);

  const add = (emp) => {
    addEmployee(emp);
    setEmployees(getEmployees());
  };

  const update = (emp) => {
    updateEmployee(emp);
    setEmployees(getEmployees());
  };

  const remove = (id) => {
    deleteEmployee(id);
    setEmployees(getEmployees());
  };

  return (
    <EmployeeContext.Provider value={{ employees, add, update, remove }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => useContext(EmployeeContext);
