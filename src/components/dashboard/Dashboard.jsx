import { useEmployees } from "../../context/EmployeeContext";
import EmployeeTable from "../employees/EmployeeTable";
import EmployeeForm from "../employees/EmployeeForm";
import PrintEmployees from "../employees/PrintEmployees";
import { useState } from "react";

export default function Dashboard() {
  const { employees } = useEmployees();
  const [showForm, setShowForm] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);

  const total = employees.length;
  const active = employees.filter(e => e.active).length;
  const inactive = total - active;

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ marginBottom: "20px" }}>Employee Dashboard</h1>

      {/* Stats cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginBottom: "25px"
        }}
      >
        <div className="card">Total Employees: {total}</div>
        <div className="card">Active Employees: {active}</div>
        <div className="card">Inactive Employees: {inactive}</div>
      </div>

      {/* Top actions */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px"
        }}
      >
        <button
          onClick={() => {
            setEditEmployee(null);
            setShowForm(true);
          }}
        >
          + Add Employee
        </button>

        <PrintEmployees />
      </div>

      {/* Add/Edit form modal */}
      {showForm && (
        <EmployeeForm
          close={() => setShowForm(false)}
          editData={editEmployee}
        />
      )}

      {/* Employee Table */}
      <EmployeeTable
        onEdit={(emp) => {
          setEditEmployee(emp);
          setShowForm(true);
        }}
      />
    </div>
  );
}
