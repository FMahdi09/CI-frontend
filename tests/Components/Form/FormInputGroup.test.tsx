import { render, screen } from '@testing-library/react';
import FormInputGroup from '../../../src/Components/FormInputGroup/FormInputGroup';
import userEvent from '@testing-library/user-event';

describe('FromInputGroup', () => 
{
    const renderComponent = (
        description: string,
        label: string,
        hasError: boolean,
        onChange: (value: string) => void
    ) =>
    {
        render(
            <FormInputGroup 
                description={description} 
                ariaLabel={label}
                hasError={hasError}
                onChange={onChange}
            />
        );

        return ({
            input: screen.getByRole('textbox', {name:label}),
            user: userEvent.setup()
        });
    };

    it('should show an error if hasError is true', () => 
    {
        const onChange = () => 
        {
        };

        const {input} = renderComponent('desc', 'label', true, onChange);

        expect(input.className).contain('error');
    });

    it('should not show an error if hasError is false', () =>
    {
        const onChange = () => 
        {
        };

        const {input} = renderComponent('desc', 'label', false, onChange);

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

        const {input, user} = renderComponent('desc', 'label', false, onChange);

        await user.type(input, inputValue);

        expect(callBackValue).equal(inputValue);
    });
});