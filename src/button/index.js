import styled, { css } from 'styled-components';

export const ButtonLink = styled.a`
    background-color: transparent;
    font-size: ${props => props.fontSize || '1rem'};
    cursor: pointer;

    ${ props => props.rounded && css`
        border-radius: 24px;
        border: .1rem solid ${props => props.textColor || '#212121'};
        color: ${props => props.textColor || '#212121'};
    `}
`;
