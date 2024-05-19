import NavigationLink from '../../NavigationLink/NavigationLink';
import './ExploreNavigation.css';

function ExploreNavigation()
{
    return (
        <nav className='explore-nav'>
            <ul>
                <NavigationLink to='/explore/repos' activeClass='explore-nav-active'>Repositories</NavigationLink>
                <NavigationLink to='/explore/users' activeClass='explore-nav-active'>Users</NavigationLink>
                <NavigationLink to='/explore/organisations' activeClass='explore-nav-active'>Organisations</NavigationLink>
            </ul>
        </nav>
    );
}

export default ExploreNavigation;