import { Outlet } from 'react-router-dom';
import ExploreNavigation from './ExploreNavigation/ExploreNavigation';

function Explore()
{
    return (
        <>
            <ExploreNavigation />
            <Outlet/>
        </>
    );
}

export default Explore;