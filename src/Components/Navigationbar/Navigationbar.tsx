import './Navigationbar.css';
import NavigationLink from '../NavigationLink/NavigationLink';

function Navigationbar()
{
    return (
        <nav className='navigationbar secondary-background'>
            <ul>
                <NavigationLink activeClass='active' to='/explore'>
                    Explore
                </NavigationLink>
                <NavigationLink activeClass='active' to='/help'>
                    Help
                </NavigationLink>
            </ul>
            <ul>
                <NavigationLink activeClass='active' to='/login'>
                    Login
                </NavigationLink>
                <NavigationLink activeClass='active' to='/register'>
                    Register
                </NavigationLink>
            </ul>
        </nav>
    );
}

export default Navigationbar;