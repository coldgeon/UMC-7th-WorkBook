export default function Input({ onChange, ...rest }) {
  return <input {...rest} onChange={onChange} />;
}
