import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Explore from '../../../src/Components/Explore/Explore';

describe('Explore', () => 
{
    const renderComponent = () => 
    {
        render(
            <Explore />,
            {wrapper: MemoryRouter}
        );
    };

    it('should render all elements without failure', () => 
    {
        renderComponent();
    });
});