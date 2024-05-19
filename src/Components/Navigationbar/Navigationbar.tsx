import './Navigationbar.css';
import NavigationLink from '../NavigationLink/NavigationLink';

function Navigationbar()
{
    return (
        <nav className='navigationbar secondary-background'>
            <ul>
                <NavigationLink className='secondary-button' activeClass='secondary-button-active' to='/explore'>
                    Explore
                </NavigationLink>
                <NavigationLink className='secondary-button' activeClass='secondary-button-active' to='/help'>
                    Help
                </NavigationLink>
            </ul>
            <ul>
                <NavigationLink className='secondary-button' activeClass='secondary-button-active' to='/login'>
                    Login
                </NavigationLink>
                <NavigationLink className='secondary-button' activeClass='secondary-button-active' to='/register'>
                    Register
                </NavigationLink>
            </ul>
        </nav>
    );
}

export default Navigationbar;