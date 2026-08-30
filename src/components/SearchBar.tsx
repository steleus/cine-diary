interface SearchBarProps {
  searchTerm: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

function SearchBar({
  searchTerm,
  onChange,
  onSubmit,
}: SearchBarProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Film veya dizi arayın"
      />

      <button type="submit">Ara</button>
    </form>
  );
}

export default SearchBar;