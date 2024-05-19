import { Route, Routes } from 'react-router-dom';
import ExploreNavigation from './ExploreNavigation/ExploreNavigation';
import ExploreRepositories from './ExploreRepositories/ExploreRepositories';
import ExploreUsers from './ExploreUsers/ExploreUsers';
import ExploreOrganisations from './ExploreOrganisations/ExploreOrganisations';

function Explore()
{
    return (
        <>
            <ExploreNavigation />
            <Routes>
                <Route path='/repos' element={<ExploreRepositories />}/>
                <Route path='/users' element={<ExploreUsers />}/>
                <Route path='/organisations' element={<ExploreOrganisations />}/>
            </Routes>
        </>
    );
}

export default Explore;