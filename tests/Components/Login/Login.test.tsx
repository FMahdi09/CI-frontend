import { render, screen } from '@testing-library/react';
import Login from '../../../src/Components/Login/Login';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('Login' , () => 
{
    const renderComponent = () => 
    {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        return ({
            error: screen.getByRole('paragraph', {name:/error/i}),
            usernameInput: screen.getByRole('textbox', {name:/username/i}),
            passwordInput: screen.getByLabelText(/password/i),
            submit: screen.getByRole('button', {name:/submit/i}),
            user: userEvent.setup()
        });
    };

    test.each([
        ['validUsername', 'p'],
        ['validUsername', 'veryveryveryveryveryveryveryveryverylongPassword'],
        ['u', 'validPassword'],
        ['veryveryveryveryveryveryveryveryverylongUsername', 'validPassword'],
    ])('should display an error when form is submitted with invalid values', async (
        username: string,
        password: string
    ) => 
    {
        const {
            error,
            usernameInput,
            passwordInput,
            submit,
            user
        } = renderComponent();

        await user.type(usernameInput, username);
        await user.type(passwordInput, password);

        await user.click(submit);

        expect(error.textContent).is.not.empty;
    });

    test.each([
        ['validUsername', 'validPassword'],
    ])('should not display an error when form is submitted with valid values', async (
        username: string,
        password: string
    ) => 
    {
        const {
            error,
            usernameInput,
            passwordInput,
            submit,
            user
        } = renderComponent();

        await user.type(usernameInput, username);
        await user.type(passwordInput, password);

        await user.click(submit);

        expect(error.textContent).is.empty;
    });
});