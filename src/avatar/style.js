import styled from 'styled-components';

import {
    tablet,
    desktop,
    desktop2,
    desktop3,
    desktop4
} from '../breakpoints';

export const AvatarContainer = styled.div`
    background: url(${ props => props.src }) center center no-repeat;
    background-size: cover;
    border-radius: 50%;
    min-height: 50px;
    min-width: 50px;

    //for tablet
    @media (min-width: ${tablet}px) {
        min-height: 60px;
        min-width: 60px;
    }

    //for desktop
    @media (min-width: ${desktop}px) {
        min-height: 70px;
        min-width: 70px;
    }

    //for desktop2
    @media (min-width: ${desktop2}px) {
        min-height: 80px;
        min-width: 80px;
    }

    //for desktop3
    @media (min-width: ${desktop3}px) {
        min-height: 100px;
        min-width: 100px;
    }

    //for desktop4
    @media (min-width: ${desktop4}px) {
        min-height: 120px;
        min-width: 120px;
    }
`;
