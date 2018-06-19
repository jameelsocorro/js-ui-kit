import styled, { css } from 'styled-components';

//Computation reference comes from Google Material Design document

export const FontHeadline1 = styled.div`
    font-size: 6rem;
    font-weight: ${ props => props.fontWeight || 200 };
    line-height: ${ props => props.lineHeight || '6rem' };
    letter-spacing: -0.016rem;
    text-transform: ${ props => props.textTransform || 'inherit' };
`;

export const FontHeadline2 = styled.div`
    font-size: 3.75rem;
    font-weight: ${ props => props.fontWeight || 200 };
    line-height: ${ props => props.lineHeight || '3.75rem' };
    letter-spacing: -0.008rem;
    text-transform: ${ props => props.textTransform || 'inherit' };
`;

export const FontHeadline3 = styled.div`
    font-size: 3rem;
    font-weight: ${ props => props.fontWeight || 400 };
    line-height: ${ props => props.lineHeight || '3.125rem' };
    letter-spacing: normal;
    text-transform: ${ props => props.textTransform || 'inherit' };
`;

export const FontHeadline4 = styled.div`
    font-size: 2.125rem;
    font-weight: ${ props => props.fontWeight || 400 };
    line-height: ${ props => props.lineHeight || '2.5rem' };
    letter-spacing: 0.007rem;
    text-transform: ${ props => props.textTransform || 'inherit' };
`;

export const FontHeadline5 = styled.div`
    font-size: 1.5rem;
    font-weight: ${ props => props.fontWeight || 400 };
    line-height: ${ props => props.lineHeight || '2rem' };
    letter-spacing: normal;
    text-transform: ${ props => props.textTransform || 'inherit' };
`;

export const FontHeadline6 = styled.div`
    font-size: 1.25rem;
    font-weight: ${ props => props.fontWeight || 500 };
    line-height: ${ props => props.lineHeight || '2rem' };
    letter-spacing: 0.013rem;
    text-transform: ${ props => props.textTransform || 'inherit' };
`;

export const FontSubtitle1 = styled.div`
    font-size: 1rem;
    font-weight: ${ props => props.fontWeight || 400 };
    line-height: ${ props => props.lineHeight || '1.75rem' };
    letter-spacing: 0.009rem;
    text-transform: ${ props => props.textTransform || 'inherit' };
`;

export const FontSubtitle2 = styled.div`
    font-size: 0.875rem;
    font-weight: ${ props => props.fontWeight || 500 };
    line-height: ${ props => props.lineHeight || '1.375rem' };
    letter-spacing: 0.007rem;
    text-transform: ${ props => props.textTransform || 'inherit' };
`;

export const FontBody1 = styled.div`
    font-size: 1rem;
    font-weight: ${ props => props.fontWeight || 400 };
    line-height: ${ props => props.lineHeight || '1.5rem' };
    letter-spacing: 0.03rem;
    text-transform: ${ props => props.textTransform || 'inherit' };
`;

export const FontBody2 = styled.div`
    font-size: 0.875rem;
    font-weight: ${ props => props.fontWeight || 400 };
    line-height: ${ props => props.lineHeight || '1.25rem' };
    letter-spacing: 0.018rem;
    text-transform: ${ props => props.textTransform || 'inherit' };
`;

export const FontCaption = styled.div`
    font-size: 0.75rem;
    font-weight: ${ props => props.fontWeight || 400 };
    line-height: ${ props => props.lineHeight || '1.25rem' };
    letter-spacing: 0.03rem;
    text-transform: ${ props => props.textTransform || 'inherit' };
`;

export const FontButton = styled.div`
    font-size: 0.875rem;
    font-weight: ${ props => props.fontWeight || 500 };
    line-height: ${ props => props.lineHeight || '2.25rem' };
    letter-spacing: 0.089rem;
    text-transform: ${ props => props.textTransform || 'uppercase' };
`;

export const FontOverline = styled.div`
    font-size: 0.75rem;
    font-weight: ${ props => props.fontWeight || 500 };
    line-height: ${ props => props.lineHeight || '2rem' };
    letter-spacing: 0.17rem;
    text-transform: ${ props => props.textTransform || 'uppercase' };
`;
