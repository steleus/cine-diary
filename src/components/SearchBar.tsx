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
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input className="w-full border border-gray-300 rounded px-4 py-2"
        type="text"
        value={searchTerm}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Film veya dizi arayın"
      />

      <button className="mt-2 bg-black text-white px-6 py-2 rounded hover:bg-gray-800" type="submit">Ara</button>
    </form>
  );
}

export default SearchBar;