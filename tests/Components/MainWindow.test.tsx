import { render, screen } from '@testing-library/react';
import MainWindow from '../../src/Components/MainWindow/MainWindow';

describe('MainWindow', () => 
{
    it('should render hardcoded MainWindow', () => 
    {
        render(<MainWindow/>);

        const main = screen.getByRole('paragraph');
        expect(main).toBeInTheDocument();
    });
});