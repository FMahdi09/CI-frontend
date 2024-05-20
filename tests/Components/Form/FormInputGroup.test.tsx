import { render, screen } from '@testing-library/react';
import FormInputGroup from '../../../src/Components/FormInputGroup/FormInputGroup';
import userEvent from '@testing-library/user-event';

describe('FromInputGroup', () => 
{
    const renderComponent = (
        description: string,
        hasError: boolean,
        onChange: (value: string) => void
    ) =>
    {
        render(
            <FormInputGroup 
                description={description} 
                hasError={hasError}
                onChange={onChange}
            />
        );

        return ({
            input: screen.getByRole('textbox', {name:description}),
            user: userEvent.setup()
        });
    };

    it('should show an error if hasError is true', () => 
    {
        const onChange = () => 
        {
        };

        const {input} = renderComponent('testing', true, onChange);

        expect(input.className).contain('error');
    });

    it('should not show an error if hasError is false', () =>
    {
        const onChange = () => 
        {
        };

        const {input} = renderComponent('testing', false, onChange);

        expect(input.className).not.contain('error');

    });

    it('should invoke onChange with entered value when input changes', async () => 
    {
        const inputValue = 'testing input';
        let callBackValue = '';

        const onChange = (s : string) =>
        {
            callBackValue = s;
        };

        const {input, user} = renderComponent('testing', false, onChange);

        await user.type(input, inputValue);

        expect(callBackValue).equal(inputValue);
    });
});