import { RefObject } from 'react';

interface props
{
    description: string,
    hasError: boolean,
    inputRef?: RefObject<HTMLInputElement>,
    type?: string,
    onChange(value: string) : void
}

function FormInputGroup({description, hasError, inputRef, type, onChange}: props)
{
    return (
        <div className='form-element'>
            <label htmlFor={description} role='caption' className={'form-label ' + (hasError ? 'error-text' : '')}>
                {description}
            </label>
            <input 
                type={type || 'string'}
                id={description}
                className={'form-input ' + (hasError ? 'error-border error-background' : '')}
                onChange={(e) => 
                {
                    onChange(e.target.value);
                }}
                required
                ref={inputRef}
            />
        </div>
    );
}

export default FormInputGroup;