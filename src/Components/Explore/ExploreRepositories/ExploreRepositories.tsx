import { useState } from 'react';
import Searchbar from '../../Searchbar/Searchbar';
import './ExploreRepositories.css';

function ExploreRepositories()
{
    const [, setQuery] = useState('');

    return (
        <Searchbar className='searchbar' placeholder='Search repos...' searchCallback={setQuery}>
            Search
        </Searchbar>
    );
}

export default ExploreRepositories;