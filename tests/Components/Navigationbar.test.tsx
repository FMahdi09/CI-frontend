import { render, screen } from '@testing-library/react';
import Navigationbar from '../../src/Components/Navigationbar/Navigationbar';

describe('Navigationbar', () => 
{
    it('should render hardcoded Navigationbar', () => 
    {
        render(<Navigationbar/>);

        const nav = screen.getByRole('paragraph');
        expect(nav).toBeInTheDocument();
    });
});