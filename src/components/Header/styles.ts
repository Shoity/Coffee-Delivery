import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme['base-background']};

    top: 0;
    position: sticky;
    padding: 2rem 10rem;

    nav{
        display: flex;
        gap: 1.25rem;
    }
`;

const BaseNavItems = styled.button`
    display: flex;
    padding: 0.5rem;
    border-radius: 6px;
    justify-content: center;
    line-height: 130%;
    border: 0;
    cursor: pointer;
`;

export const Location = styled(BaseNavItems)`
    gap: 0.25rem;
    background-color: ${props => props.theme['purple-light']};
    color: ${props => props.theme['purple-dark']}
`
export const Cart = styled(BaseNavItems)`
    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']}
`