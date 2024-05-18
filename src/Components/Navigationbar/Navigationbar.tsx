import './Navigationbar.css';

function Navigationbar()
{
    return (
        <nav className='navigationbar secondary-background'>
            <ul>
                <li>
                    <a className='secondary-button' href='/explore'>Explore</a>
                </li>
                <li>
                    <a className='secondary-button' href='/help'>Help</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a className='secondary-button' href='/login'>Login</a>
                </li>
                <li>
                    <a className='secondary-button' href='/register'>Register</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigationbar;