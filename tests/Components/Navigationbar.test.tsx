import { render } from '@testing-library/react';
import Navigationbar from '../../src/Components/Navigationbar/Navigationbar';
import { MemoryRouter } from 'react-router-dom';

describe('Navigationbar', () => 
{
    const renderComponent = () =>
    {
        render(
            <Navigationbar/>,
            {wrapper: MemoryRouter}
        );
    };

    it('should render all elements without failure', () => 
    {
        renderComponent();
    });
});