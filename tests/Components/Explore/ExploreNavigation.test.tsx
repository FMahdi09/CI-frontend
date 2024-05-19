import { MemoryRouter } from 'react-router-dom';
import ExploreNavigation from '../../../src/Components/Explore/ExploreNavigation/ExploreNavigation';
import { render } from '@testing-library/react';

describe('ExploreNavigation', () => 
{
    const renderComponent = () => 
    {
        render(
            <ExploreNavigation />,
            {wrapper: MemoryRouter}
        );
    };

    it('should render all elements without failure', () => 
    {
        renderComponent();
    });
});