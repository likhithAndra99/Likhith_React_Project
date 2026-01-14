export default function Input({ label, ...props }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      {label && <label>{label}</label>}
      <input {...props} style={{ padding: "8px", width: "100%" }} />
    </div>
  );
}
