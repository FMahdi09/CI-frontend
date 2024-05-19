import { Link, useMatch, useResolvedPath } from 'react-router-dom';

interface props
{
    to: string,
    children: string,
    className?: string,
    activeClass?: string
}

function NavigationLink({to, className, activeClass, children} : props)
{
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname + '/*'});

    return (
        <li>
            <Link to={to} className={(className || '') + ' ' + (isActive ? (activeClass || '') : '')}>
                {children}
            </Link>
        </li>
    );
}

export default NavigationLink;