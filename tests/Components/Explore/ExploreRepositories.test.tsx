import { render } from '@testing-library/react';
import ExploreRepositories from '../../../src/Components/Explore/ExploreRepositories/ExploreRepositories';

describe('ExploreRepositories', () => 
{
    const renderComponent = () => 
    {
        render(<ExploreRepositories />);
    };

    it('should render all elements without failure', () => 
    {
        renderComponent();
    });
});