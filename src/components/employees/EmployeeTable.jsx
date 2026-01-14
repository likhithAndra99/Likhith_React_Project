import { useEmployees } from "../../context/EmployeeContext";
import { useState } from "react";
import EmployeeFilters from "./EmployeeFilters";

export default function EmployeeTable({ onEdit }) {
  const { employees, remove, update } = useEmployees();
  const [filters, setFilters] = useState({
    search: "",
    gender: "",
    status: ""
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      remove(id);
    }
  };

  const filtered = employees.filter(emp => {
    const matchesName = emp.name.toLowerCase().includes(filters.search.toLowerCase());
    const matchesGender = filters.gender ? emp.gender === filters.gender : true;
    const matchesStatus =
      filters.status === ""
        ? true
        : filters.status === "active"
        ? emp.active
        : !emp.active;

    return matchesName && matchesGender && matchesStatus;
  });

  return (
    <>
      <EmployeeFilters filters={filters} setFilters={setFilters} />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>State</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(emp => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>
                <img src={emp.image} width="40" />
              </td>
              <td>{emp.name}</td>
              <td>{emp.gender}</td>
              <td>{emp.dob}</td>
              <td>{emp.state}</td>
              <td>
                <input
                  type="checkbox"
                  checked={emp.active}
                  onChange={() => update({ ...emp, active: !emp.active })}
                />
              </td>
              <td>
                <span style={{ display: "inline-block", marginRight: "12px" }}>
                  <button onClick={() => onEdit(emp)}>Edit</button>
                </span>

                <span style={{ display: "inline-block" }}>
                  <button
                    onClick={() => handleDelete(emp.id)}
                    style={{ background: "#dc2626" }}
                  >
                    Delete
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
