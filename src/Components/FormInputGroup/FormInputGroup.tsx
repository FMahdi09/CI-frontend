import { RefObject } from 'react';

interface props
{
    description: string,
    ariaLabel: string,
    hasError: boolean,
    inputRef?: RefObject<HTMLInputElement>,
    type?: string,
    onChange(value: string) : void
}

function FormInputGroup({description, ariaLabel, hasError, inputRef, type, onChange}: props)
{
    return (
        <div className='form-element'>
            <label htmlFor={ariaLabel} className={'form-label ' + (hasError ? 'error-text' : '')}>
                {description}
            </label>
            <input 
                type={type || 'string'}
                id={ariaLabel}
                aria-label={ariaLabel}
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