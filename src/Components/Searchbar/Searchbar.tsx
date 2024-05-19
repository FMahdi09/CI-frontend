import { FormEvent, useState } from 'react';
import './Searchbar.css';

interface props
{
    placeholder: string,
    children: string,
    searchCallback(query: string): void
}

function Searchbar({placeholder, children, searchCallback}: props)
{
    const [query, setQuery] = useState('');

    const onQueryUpdated = (e : FormEvent<HTMLInputElement>) =>
    {
        setQuery(e.currentTarget.value);
    };

    const onSearchPressed = () =>
    {
        searchCallback(query);
    };

    return (
        <div className="searchbar">
            <input type="text" value={query} onInput={onQueryUpdated} className="searchbar-input" placeholder={placeholder} aria-label={placeholder}/>
            <button className="searchbar-button" onClick={onSearchPressed}>
                {children}
            </button>
        </div>
    );
}

export default Searchbar;