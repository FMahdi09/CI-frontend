import { render } from '@testing-library/react';
import ExploreOrganisations from '../../../src/Components/Explore/ExploreOrganisations/ExploreOrganisations';

describe('ExploreOrganisations', () => 
{
    const renderComponent = () => 
    {
        render(<ExploreOrganisations />);
    };

    it('should render all elements without failure', () => 
    {
        renderComponent();
    });
});