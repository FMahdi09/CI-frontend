import './Navigationbar.css';

function Navigationbar()
{
    return (
        <div className='navigationbar secondary-background d-flex flex-row'>
            <div className='d-flex flex-row flex-fill'>
                <button className='secondary-button navigationbar-button'>Explore</button>
                <button className='secondary-button navigationbar-button'>Help</button>
            </div>
            <div className='d-flex flex-row'>
                <button className='secondary-button navigationbar-button'>Register</button>
                <button className='secondary-button navigationbar-button'>Login</button>
            </div>
        </div>
    );
}

export default Navigationbar;