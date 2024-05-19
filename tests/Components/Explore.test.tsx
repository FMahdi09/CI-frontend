import { render, screen } from '@testing-library/react';
import Explore from '../../src/Components/Explore/Explore';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Explore', () => 
{
    const renderComponent = () => 
    {
        render(
            <MemoryRouter>
                <Explore />,
            </MemoryRouter>
        );

        return {
            repoLink: screen.getByRole('link', {name:/repo/i}),
            usersLink: screen.getByRole('link', {name:/users/i}),
            orgLink: screen.getByRole('link', {name:/organisations/i}),
            user: userEvent.setup()
        };
    };

    it('should render all elements without failure', () => 
    {
        renderComponent();
    });
});