import { useEffect, useState } from "react";
import { useEmployees } from "../../context/EmployeeContext";

export default function EmployeeForm({ close, editData }) {
  const { add, update } = useEmployees();

  const [form, setForm] = useState({
    id: "",
    name: "",
    gender: "",
    dob: "",
    state: "",
    active: true,
    image: ""
  });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!form.name || !form.gender || !form.dob || !form.state || !form.image) {
      alert("All fields are required");
      return;
    }

    if (editData) {
      update(form);
    } else {
      add({
        ...form,
        id: "EMP" + Date.now()
      });
    }

    close();
  };

  return (
    <div style={{ background: "#fff", padding: "20px", border: "1px solid #ccc" }}>
      <h2>{editData ? "Edit Employee" : "Add Employee"}</h2>

      <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />

      <select name="gender" value={form.gender} onChange={handleChange}>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <input type="date" name="dob" value={form.dob} onChange={handleChange} />

      <select name="state" value={form.state} onChange={handleChange}>
        <option value="">Select State</option>
        <option>Karnataka</option>
        <option>Maharashtra</option>
        <option>Telangana</option>
        <option>Tamil Nadu</option>
      </select>

      <label>
        Active
        <input type="checkbox" name="active" checked={form.active} onChange={handleChange} />
      </label>

      <input type="file" accept="image/*" onChange={handleImage} />

      {form.image && <img src={form.image} width="80" />}

      <div
        style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px"
        }}
        >
        <button onClick={close} style={{ background: "#6b7280" }}>
            Cancel
        </button>
        <button onClick={handleSubmit}>
            Save
        </button>
        </div>
    </div>
  );
}
