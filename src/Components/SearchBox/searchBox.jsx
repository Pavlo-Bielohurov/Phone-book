export default function Search({ value, onSearch }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
