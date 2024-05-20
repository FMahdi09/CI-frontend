import { render } from '@testing-library/react';
import Register from '../../../src/Components/Register/Register';
import { MemoryRouter } from 'react-router-dom';

describe('Register', () => 
{
    const renderComponent = () => 
    {
        render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        );
    };

    it('should render all elements without failure', () => 
    {
        renderComponent();
    });
});