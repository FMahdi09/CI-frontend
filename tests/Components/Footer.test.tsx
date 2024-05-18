import { render, screen } from '@testing-library/react';
import Footer from '../../src/Components/Footer/Footer';

describe('Footer', () => 
{
    const renderComponent = () =>
    {
        render(<Footer/>);

        return {
            githubLink: screen.getByRole('link', {name:/github/i}),
            licenseLink: screen.getByRole('link', {name:/license/i}),
        };
    };

    it('should render all elements without failure', () => 
    {
        renderComponent();
    });
});