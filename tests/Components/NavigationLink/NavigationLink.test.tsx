import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavigationLink from '../../../src/Components/NavigationLink/NavigationLink';

describe('NavigationLink', () => 
{
    const renderComponent = (
        initalLocation : string,
        to : string,
        children : string,
        activeClass : string,
        activeMatch? : string
    ) =>
    {
        render(
            <MemoryRouter basename={initalLocation}>
                <NavigationLink to={to} activeClass={activeClass} activeMatch={activeMatch || ''}>
                    {children}
                </NavigationLink>
            </MemoryRouter>
        );

        return ({
            link: screen.getByRole('link', {name:children})
        });
    };

    it('should be active if the current location equals activeMatch', () => 
    {
        const {link} = renderComponent(
            '/',
            '/testing',
            'link',
            'active',
            '/'
        );

        expect(link.className).contain('active');
    });

    it('should not be active if the current location does not equal activeMatch', () => 
    {
        const {link} = renderComponent(
            '/',
            '/testing',
            'link',
            'active',
            '/testing'
        );

        expect(link.className).not.contain('active');
    });

    it('should be active if the current location equals to and activeMatch is not set', () => 
    {
        const {link} = renderComponent(
            '/',
            '/',
            'link',
            'active',
        );

        expect(link.className).contain('active');
    });

    it('should not be active if the current location does not equal to and activeMatch is not set', () => 
    {
        const {link} = renderComponent(
            '/',
            '/testing',
            'link',
            'active',
        );

        expect(link.className).not.contain('active');
    });
});