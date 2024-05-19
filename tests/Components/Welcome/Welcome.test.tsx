import { render } from '@testing-library/react';
import Welcome from '../../../src/Components/Welcome/Welcome';

describe('Welcome', () => 
{
    const renderComponent = () => 
    {
        render(<Welcome />);
    };

    it('should render all elements without failure', () => 
    {
        renderComponent();
    });
});