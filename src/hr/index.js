import styled from 'styled-components';

export const Hr = styled.hr`
    background-color: ${props => props.color || '#212121'};
    border: none;
    height: ${props => props.height || 1}px;
    width: 100%;
`;
