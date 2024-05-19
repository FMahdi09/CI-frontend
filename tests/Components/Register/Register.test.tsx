import { render } from '@testing-library/react';
import Register from '../../../src/Components/Register/Register';

describe('Register', () => 
{
    const renderComponent = () => 
    {
        render(<Register />);
    };

    it('should render all elements without failure', () => 
    {
        renderComponent();
    });
});