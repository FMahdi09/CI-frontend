import { useState } from 'react';
import Searchbar from '../../Searchbar/Searchbar';

function ExploreRepositories()
{
    const [query, setQuery] = useState('');

    return (
        <Searchbar placeholder='Search repos...' searchCallback={setQuery}>
            Search
        </Searchbar>
    );
}

export default ExploreRepositories;