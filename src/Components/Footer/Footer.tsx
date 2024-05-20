import './Footer.css';

function Footer()
{
    return (
        <div className='footer secondary-background'>
            <div className='footer-left'>
                <a 
                    className='link footer-link' 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href='https://github.com/FMahdi09/CI-frontend'>
                        Github
                </a>
                <div>|</div>
                <a 
                    className='link footer-link'
                    target="_blank"
                    rel="noopener noreferrer"
                    href='https://github.com/FMahdi09/CI-frontend'>
                        License
                </a>
            </div>
        </div>
    );
}

export default Footer;