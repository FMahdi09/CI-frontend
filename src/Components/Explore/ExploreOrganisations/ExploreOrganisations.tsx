import { useState } from 'react';
import Searchbar from '../../Searchbar/Searchbar';
import './ExploreOrganisations.css';

function ExploreOrganisations()
{ 
    const [, setQuery] = useState('');

    return (
        <div className='orgs-header'>
            <Searchbar className='orgs-searchbar' placeholder='Search organisations...' searchCallback={setQuery}>
                Search
            </Searchbar>
        </div>
    );
}

export default ExploreOrganisations;