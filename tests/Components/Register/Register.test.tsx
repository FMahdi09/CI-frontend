import { render, screen } from '@testing-library/react';
import Register from '../../../src/Components/Register/Register';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Register', () => 
{
    const renderComponent = () => 
    {
        render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        );

        return ({
            error: screen.getByRole('paragraph', {name:/error/i}),
            usernameInput: screen.getByRole('textbox', {name:/username/i}),
            emailInput: screen.getByRole('textbox', {name:/email/i}),
            passwordInput: screen.getByLabelText('password'),
            confirmPasswordInput: screen.getByLabelText(/confirm password/i),
            submit: screen.getByRole('button', {name:/submit/i}),
            user: userEvent.setup()
        });
    };

    test.each([
        ['as', 'email@email.at', 'validPassword', 'validPassword'],
        ['validUsername', 'email@email.at', 'validPassword', 'wrongPassword'],
        ['validUsername', 'invalidEmail', 'validPassword', 'validPassword'],
        ['validUsername', 'email@email.at', 'invalid', 'invalid'],
    ])('should display an error when form is submitted with invalid values', async (
        username: string,
        email: string,
        password: string,
        confirmPassword: string
    ) => 
    {
        const {
            error,
            usernameInput,
            emailInput,
            passwordInput,
            confirmPasswordInput,
            submit,
            user
        } = renderComponent();

        await user.type(usernameInput, username);
        await user.type(emailInput, email);
        await user.type(passwordInput, password);
        await user.type(confirmPasswordInput, confirmPassword);
        
        await user.click(submit);

        expect(error.textContent).is.not.empty;
    });

    test.each([
        ['validUsername', 'email@email.at', 'validPassword', 'validPassword'],
    ])('should display no error when form is submitted with valid values', async (
        username: string,
        email: string,
        password: string,
        confirmPassword: string
    ) => 
    {
        const {
            error,
            usernameInput,
            emailInput,
            passwordInput,
            confirmPasswordInput,
            submit,
            user
        } = renderComponent();

        await user.type(usernameInput, username);
        await user.type(emailInput, email);
        await user.type(passwordInput, password);
        await user.type(confirmPasswordInput, confirmPassword);
        
        await user.click(submit);

        expect(error.textContent).is.empty;
    });
});