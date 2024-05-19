import './Navigationbar.css';
import NavigationLink from '../NavigationLink/NavigationLink';

function Navigationbar()
{
    return (
        <nav className='navigationbar secondary-background'>
            <ul>
                <NavigationLink activeClass='navigationbar-active' to='/explore'>
                    Explore
                </NavigationLink>
                <NavigationLink activeClass='navigationbar-active' to='/help'>
                    Help
                </NavigationLink>
            </ul>
            <ul>
                <NavigationLink activeClass='navigationbar-active' to='/login'>
                    Login
                </NavigationLink>
                <NavigationLink activeClass='navigationbar-active' to='/register'>
                    Register
                </NavigationLink>
            </ul>
        </nav>
    );
}

export default Navigationbar;