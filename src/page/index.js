import styled from 'styled-components';

export const PageContainer = styled.div`
    background-color: ${props => props.backgroundColor || 'inherit'};
    box-sizing: border-box;
    height: ${props => props.height || 'inherit'}%;
    width: ${props => props.width || 100}%;
`;

export const Page = styled.div`
    background-color: ${props => props.backgroundColor || 'inherit'};
    height: ${props => props.height || 'inherit'}%;
    margin: ${props => (props.center) ? 'auto': 0};
    max-width: ${props => props.resolution}px;
    position: relative;
`;
