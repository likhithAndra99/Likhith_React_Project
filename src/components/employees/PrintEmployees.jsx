export default function PrintEmployees() {
  const print = () => {
    window.print();
  };

  return <button onClick={print}>Print Employees</button>;
}
