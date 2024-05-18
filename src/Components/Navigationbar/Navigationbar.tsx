import './Navigationbar.css';
import NavigationLink from './NavigationLink/NavigationLink';

function Navigationbar()
{
    return (
        <nav className='navigationbar secondary-background'>
            <ul>
                <NavigationLink to='/explore'>Explore</NavigationLink>
                <NavigationLink to='/help'>Help</NavigationLink>
            </ul>
            <ul>
                <NavigationLink to='/login'>Login</NavigationLink>
                <NavigationLink to='/register'>Register</NavigationLink>
            </ul>
        </nav>
    );
}

export default Navigationbar;