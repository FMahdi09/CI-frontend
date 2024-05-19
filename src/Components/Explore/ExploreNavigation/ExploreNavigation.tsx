import NavigationLink from '../../NavigationLink/NavigationLink';
import './ExploreNavigation.css';

function ExploreNavigation()
{
    return (
        <nav className='explore-nav'>
            <ul>
                <NavigationLink to='repos' activeClass='explore-nav-active'>Repositories</NavigationLink>
                <NavigationLink to='users' activeClass='explore-nav-active'>Users</NavigationLink>
                <NavigationLink to='organisations' activeClass='explore-nav-active'>Organisations</NavigationLink>
            </ul>
        </nav>
    );
}

export default ExploreNavigation;