export default function Button({ onClick, label }) {
  return (
    <button type="button" onClick={onClick}>
      {label}
    </button>
  );
}
