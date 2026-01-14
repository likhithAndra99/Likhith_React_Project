export default function EmployeeCard({ employee, onEdit, onDelete }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        width: "220px",
        background: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      <img
        src={employee.image}
        alt={employee.name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />

      <h3>{employee.name}</h3>
      <p>{employee.gender}</p>
      <p>{employee.state}</p>
      <p>Status: {employee.active ? "Active" : "Inactive"}</p>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => onEdit(employee)}>Edit</button>
        <button onClick={() => onDelete(employee.id)}>Delete</button>
      </div>
    </div>
  );
}
