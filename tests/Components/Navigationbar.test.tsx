import { render, screen } from '@testing-library/react';
import Navigationbar from '../../src/Components/Navigationbar/Navigationbar';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Navigationbar', () => 
{
    const renderComponent = () =>
    {
        render(
            <Navigationbar/>,
            {wrapper: MemoryRouter}
        );

        return {
            exploreLink:  screen.getByRole('link', {name:/explore/i}),
            helpLink:     screen.getByRole('link', {name:/help/i}),
            loginLink:    screen.getByRole('link', {name:/login/i}),
            registerLink: screen.getByRole('link', {name:/register/i}),
            user: userEvent.setup(),
        };
    };

    it('should render all elements without failure', () => 
    {
        renderComponent();
    });

    it('should mark the explore button as active after clicking on it', async () => 
    {
        const {exploreLink, user} = renderComponent();
        
        await user.click(exploreLink);

        expect(exploreLink.className).toMatch(/active/i);
    });
});