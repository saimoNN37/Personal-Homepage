import styled from "styled-components";
import { ReactComponent as Error } from "./error.svg"

export const Wrapper = styled.div`
    margin: 88px auto 0;
    text-align: center  ;
    max-width: 420px;
    @media (max-width: 767px) {
        margin: 44px auto 0;
    }
`;

export const ErrorIcon = styled(Error)`
    margin: 0 0 23px;
`;

export const Text = styled.h3`
    color: ${({ theme }) => theme.elementColor.portfolio.title};
    font-size: 24px;
    font-weight: 700;
`;

export const Info = styled.p`
    color: ${({ theme }) => theme.elementColor.portfolio.subHeader};
    font-size: 20px;
    font-weight: 400;
    margin: 32px 0 32px;
`;

