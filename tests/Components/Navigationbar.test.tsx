import { render, screen } from '@testing-library/react';
import Navigationbar from '../../src/Components/Navigationbar/Navigationbar';

describe('Navigationbar', () => 
{
    const renderComponent = () =>
    {
        render(<Navigationbar/>);

        return {
            exploreLink:  screen.getByRole('link', {name:/explore/i}),
            helpLink:     screen.getByRole('link', {name:/help/i}),
            loginLink:    screen.getByRole('link', {name:/login/i}),
            registerLink: screen.getByRole('link', {name:/register/i}),
        };
    };

    it('should render all elements without failure', () => 
    {
        renderComponent();
    });
});