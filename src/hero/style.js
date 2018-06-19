import styled, { css } from 'styled-components';

export const HeroContainer = styled.div`
    height: ${ props => props.height || 100 }%;
    width: 100%;

    ${ props => props.fixed && css`
        position: fixed;
        z-index: -1;
    `}
`;

export const HeroBackground = styled.div`
    background: url(${ props => props.src }) center center no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
`;
