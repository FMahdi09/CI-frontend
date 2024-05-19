import { render } from '@testing-library/react';
import ExploreUsers from '../../../src/Components/Explore/ExploreUsers/ExploreUsers';

describe('ExploreUsers', () => 
{
    const renderComponent = () => 
    {
        render(<ExploreUsers />);
    };

    it('should render all elements without failure', () => 
    {
        renderComponent();
    });
});