import { Link, useMatch } from 'react-router-dom';

interface props
{
    to: string,
    children: string,
    activeMatch?: string
    activeClass: string
    className?: string,
}

function NavigationLink({to, className, activeMatch, activeClass, children} : props)
{
    const isActive = useMatch({path: activeMatch ? activeMatch : to + '/*'});

    return (
        <li>
            <Link to={to} className={(className || '') + ' ' + (isActive ? (activeClass || '') : '')}>
                {children}
            </Link>
        </li>
    );
}

export default NavigationLink;