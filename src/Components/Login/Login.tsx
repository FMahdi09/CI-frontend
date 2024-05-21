import { NavLink } from 'react-router-dom';
import FormInputGroup from '../FormInputGroup/FormInputGroup';
import './Login.css';
import { FormEvent, useRef, useState } from 'react';

function Login()
{
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');

    const [hasError, SetHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => 
    {
        event.preventDefault();

        const validInput = (username.length < 24 && username.length > 3) &&
                           (password.length < 24 && password.length > 7);
        SetHasError(!validInput);
        
        if (!validInput)
        {
            usernameRef.current?.focus();
            setErrorMessage('Invalid username or password');
        }
        else
        {
            setErrorMessage('');
        }
    };

    return (
        <div className='login-content'>
            <div className='login-form'>
                <div className='form-header'>
                    Login
                </div>
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-element'>
                        <p aria-label='error' className={(errorMessage ? 'error' : 'hidden')}>
                            {errorMessage}
                        </p>
                    </div>
                    <FormInputGroup 
                        description='Username *'
                        ariaLabel='username'
                        hasError={hasError}
                        inputRef={usernameRef} 
                        onChange={SetUsername}
                    />
                    <FormInputGroup
                        description='Password *'
                        ariaLabel='password'
                        type='password'
                        hasError={hasError}
                        inputRef={passwordRef}
                        onChange={SetPassword}
                    />
                    <div className='form-element'>
                        <button aria-label='submit' className='form-button'>
                            Login
                        </button>
                    </div>
                    <div className='form-element'>
                        <NavLink aria-label='register' className='link register-link' to='/register'>
                            Need an account? Register now.
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;