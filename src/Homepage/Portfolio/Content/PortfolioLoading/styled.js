import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 88px auto 0;
    text-align: center;
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.elementColor.portfolio.paragraph};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 48px;
`;

export const Spinner = styled.div`
    width: 160px;
    height: 160px;
    margin: 0 auto;
    border-radius: 50%;
    border: 11px solid ${({theme}) => theme.elementColor.portfolio.Spinner};
    border-right-color: ${({ theme }) => theme.elementColor.portfolio.spinnerColor};
    animation: spin 1.5s linear infinite;
    
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
    
`;