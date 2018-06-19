import styled from 'styled-components';

export const ImageLinkContainer = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    line-height: 0px;
    overflow: hidden;
    width: 100%;
`;

export const ImageLinkElement = styled.img`
    height: 100%;
    transition: all 0.3s ease-in-out;
    width: 100%;

    &:hover {
        transform: scale(1.2);
    }
`;
