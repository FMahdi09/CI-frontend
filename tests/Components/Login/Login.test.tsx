import { render } from '@testing-library/react';
import Login from '../../../src/Components/Login/Login';

describe('Login' , () => 
{
    const renderComponent = () => 
    {
        render(<Login />);
    };

    it('should render all elements without failure', () => 
    {
        renderComponent();
    });
});