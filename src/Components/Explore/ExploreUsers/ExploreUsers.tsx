import { useState } from 'react';
import Searchbar from '../../Searchbar/Searchbar';
import './ExploreUsers.css';

function ExploreUsers()
{
    const [, setQuery] = useState('');

    return (
        <div className='users-header'>
            <Searchbar className='users-searchbar' placeholder='Search users...' searchCallback={setQuery}>
                Search
            </Searchbar>
        </div>
    );
}

export default ExploreUsers;