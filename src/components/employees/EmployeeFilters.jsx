export default function EmployeeFilters({ filters, setFilters }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
      <input
        placeholder="Search by name"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />

      <select
        value={filters.gender}
        onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
      >
        <option value="">All Genders</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <select
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
      >
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
}
