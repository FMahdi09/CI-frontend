import { NavLink } from 'react-router-dom';
import './Register.css';
import { FormEvent, useEffect, useRef, useState } from 'react';
import FormInputGroup from '../FormInputGroup/FormInputGroup';

const EMAIL_REGEX = /^\S+@\S+\.\S+$/;

function Register()
{
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [username, SetUsername] = useState('');
    const [usernameErr, SetUsernameErr] = useState(false);

    const [email, SetEmail] = useState('');
    const [emailErr, SetEmailErr] = useState(false);

    const [password, SetPassword] = useState('');
    const [confirmPassword, SetConfirmPassword] = useState('');
    const [passwordErr, SetPasswordErr] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => 
    {
        event.preventDefault();

        // username validation
        const validUsername = username.length < 24 && username.length > 3;
        SetUsernameErr(!validUsername);
        
        if (!validUsername)
        {
            usernameRef.current?.focus();
            setErrorMessage('Username must be between 4 and 23 characters long');
            return;
        }

        // email validation
        const validEmail = EMAIL_REGEX.test(email);
        SetEmailErr(!validEmail);
        
        if (!validEmail)
        {
            emailRef.current?.focus();
            setErrorMessage('Invalid email');
            return;
        }

        // password validation
        const validPassword = password.length < 24 && password.length > 7;
        SetPasswordErr(!validPassword);

        if (!validPassword)
        {
            passwordRef.current?.focus();
            setErrorMessage('Password must be between 8 and 24 characters long');
            return;
        }

        if (password !== confirmPassword)
        {
            passwordRef.current?.focus();
            SetPasswordErr(true);
            setErrorMessage('Passwords do not match');
            return;
        }

        setErrorMessage('');
    };

    useEffect(() => 
    {
        usernameRef.current?.focus();
    }, []);

    return (
        <div className='register-content'>
            <div className='register-form'>
                <div className='form-header'>
                    Register
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
                        hasError={usernameErr}
                        inputRef={usernameRef} 
                        onChange={SetUsername}
                    />
                    <FormInputGroup
                        description='Email address *'
                        ariaLabel='email'
                        hasError={emailErr}
                        inputRef={emailRef}
                        onChange={SetEmail}
                    />
                    <FormInputGroup
                        description='Password *'
                        ariaLabel='password'
                        hasError={passwordErr}
                        inputRef={passwordRef}
                        type='password'
                        onChange={SetPassword}
                    />
                    <FormInputGroup
                        description='Confirm password *'
                        ariaLabel='confirm password'
                        hasError={passwordErr}
                        type='password'
                        onChange={SetConfirmPassword}
                    />
                    <div className='form-element'>
                        <button aria-label='submit' className='form-button'>
                            Register Account
                        </button>
                    </div>
                    <div className='form-element'>
                        <NavLink aria-label='login' className='link login-link' to='/login'>
                            Already have an account? Sign in now!
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;