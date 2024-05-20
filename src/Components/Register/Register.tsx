import { NavLink } from 'react-router-dom';
import './Register.css';

function Register()
{
    return (
        <div className='register-content'>
            <div className='register-form'>
                <div className='form-header'>
                    Register
                </div>
                <form className='form'>
                    <div className='form-element'>
                        <label htmlFor='username' className='form-label'>
                            Username *
                        </label>
                        <input 
                            type='text'
                            id='username'
                            className='form-input'
                            required
                        />
                    </div>
                    <div className='form-element'>
                        <label htmlFor='email' className='form-label'>
                            Email address *
                        </label>
                        <input 
                            type='text'
                            id='email'
                            className='form-input'
                            required
                        />
                    </div>
                    <div className='form-element'>
                        <label htmlFor='password' className='form-label'>
                            Password *
                        </label>
                        <input 
                            type='password'
                            id='password'
                            className='form-input'
                            required
                        />
                    </div>                   
                    <div className='form-element'>
                        <label htmlFor='confirmPassword' className='form-label'>
                            Confirm Password *
                        </label>
                        <input 
                            type='password'
                            id='confirmPassword'
                            className='form-input'
                            required
                        />
                    </div>
                    <div className='form-element'>
                        <button className='form-button'>
                            Register Account
                        </button>
                    </div>
                    <div className='form-element'>
                        <NavLink className='link login-link' to='/login'>
                            Already have an account? Sign in now!
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;