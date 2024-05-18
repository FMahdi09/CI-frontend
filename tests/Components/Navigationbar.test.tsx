import { render, screen } from '@testing-library/react';
import Navigationbar from '../../src/Components/Navigationbar/Navigationbar';

describe('Navigationbar', () => 
{
    const renderComponent = () =>
    {
        render(<Navigationbar/>);

        return {
            exploreButton:  screen.getByRole('button', {name:/explore/i}),
            helpButton:     screen.getByRole('button', {name:/help/i}),
            loginButton:    screen.getByRole('button', {name:/login/i}),
            registerButton: screen.getByRole('button', {name:/register/i}),
        };
    };

    it('should render all elements without failure', () => 
    {
        renderComponent();
    });
});