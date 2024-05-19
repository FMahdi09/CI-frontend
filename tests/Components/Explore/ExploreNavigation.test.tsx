import { MemoryRouter } from 'react-router-dom';
import ExploreNavigation from '../../../src/Components/Explore/ExploreNavigation/ExploreNavigation';
import { render, screen } from '@testing-library/react';

describe('ExploreNavigation', () => 
{
    const renderComponent = () => 
    {
        render(
            <ExploreNavigation />,
            {wrapper: MemoryRouter}
        );

        return ({
            repositoryLink: screen.getByRole('link', {name:/repo/i}),
            usersLink: screen.getByRole('link', {name:/users/i}),
            organisationsLink: screen.getByRole('link', {name:/organisations/i}),
        });
    };

    it('should render all elements without failure', () => 
    {
        renderComponent();
    });
});