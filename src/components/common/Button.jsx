export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      style={{
        padding: "8px 14px",
        background: "#2563eb",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}
