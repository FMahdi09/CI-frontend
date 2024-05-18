import { Link, useMatch, useResolvedPath } from 'react-router-dom';

interface props
{
    to: string,
    children: string,
    className?: string
}

function NavigationLink({to, children} : props)
{
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true});

    return (
        <li>
            <Link to={to} className={'secondary-button ' + (isActive ? 'secondary-button-active' : '')}>
                {children}
            </Link>
        </li>
    );
}

export default NavigationLink;