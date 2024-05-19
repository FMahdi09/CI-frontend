import { FormEvent, useState } from 'react';
import './Searchbar.css';

interface props
{
    placeholder: string,
    children: string,
    className?: string,
    searchCallback(query: string): void
}

function Searchbar({placeholder, children, className, searchCallback}: props)
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
        <div className={'searchbar ' + (className || '')}>
            <input type='text' value={query} onInput={onQueryUpdated} className='searchbar-input' placeholder={placeholder} aria-label={placeholder}/>
            <button className='searchbar-button' onClick={onSearchPressed}>
                {children}
            </button>
        </div>
    );
}

export default Searchbar;