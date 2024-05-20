import { useState } from 'react';
import Searchbar from '../../Searchbar/Searchbar';
import './ExploreRepositories.css';

function ExploreRepositories()
{
    const [, setQuery] = useState('');

    return (
        <div className='repo-header'>
            <Searchbar className='repo-searchbar' placeholder='Search repos...' searchCallback={setQuery}>
                Search
            </Searchbar>
        </div>
    );
}

export default ExploreRepositories;