interface SearchBarProps {
    searchTerm: string;
    onSearch: (value: string) => void;
}

function SearchBar({ searchTerm, onSearch }: SearchBarProps) {
    return (
        <input
            type="text"
            value={searchTerm}
            onChange={(event) => onSearch(event.target.value)}
            placeholder="Film veya dizi ara..."
        />
    );
}
export default SearchBar;
