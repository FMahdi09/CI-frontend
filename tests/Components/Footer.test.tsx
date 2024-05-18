import { render, screen } from '@testing-library/react';
import Footer from '../../src/Components/Footer/Footer';

describe('Footer', () => 
{
    it('should render hardcoded Footer', () => 
    {
        render(<Footer/>);

        const footer = screen.getByRole('paragraph');
        expect(footer).toBeInTheDocument();  
    });
});