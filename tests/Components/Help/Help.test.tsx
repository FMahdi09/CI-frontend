import { render } from '@testing-library/react';
import Help from '../../../src/Components/Help/Help';

describe('Help', () => 
{
    const renderComponent = () => 
    {
        render(<Help />);
    };

    it('should render all elements without failure', () => 
    {
        renderComponent();
    });
});