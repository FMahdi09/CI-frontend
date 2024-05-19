import { render, screen } from '@testing-library/react';
import Searchbar from '../../../src/Components/Searchbar/Searchbar';
import userEvent from '@testing-library/user-event';

describe('Searchbar', () => 
{
    const renderComponent = (
        placeholder: string,
        children: string,
        callBack: (query: string) => void
    ) => 
    {
        render(
            <Searchbar placeholder={placeholder} searchCallback={callBack}>
                {children}
            </Searchbar>
        );

        return ({
            searchButton: screen.getByRole('button', {name:children}),
            inputField: screen.getByRole('textbox', {name:placeholder}),
            user: userEvent.setup()
        });
    };

    it('should invoke callback with searchquery when button is pressed', async () => 
    {
        const query = 'my search query';
        let callBackValue : string = '';

        const callBack = (query : string) =>
        {
            callBackValue = query;
        };

        const {searchButton, inputField, user} =  renderComponent('placeholder', 'search', callBack);

        await user.type(inputField, query);
        await user.click(searchButton);

        expect(callBackValue).equal(query);
    });
});