import { ReactComponent as PortfolioIcon } from "./portfolioIcon.svg"
import styled from "styled-components";

export const Section = styled.div`
    margin-bottom: 100px;
    @media (max-width: 767px) {
        margin-bottom: 48px;
    }
`;

export const Icon = styled(PortfolioIcon)`
    width: 40px;
    @media (max-width: 767px) {
        width: 32px;
    }
`;

export const SubHeader = styled.h2`
    font-weight: 900;
    font-size: 30px;
    color: ${({ theme }) => theme.elementColor.portfolio.subHeader};
    margin: 13px 0 8px;
    @media (max-width: 767px) {
        font-size: 18px;
        margin: 13px 0 16px;
    }
`;

export const Header = styled.header`
    text-align: center;
    margin-bottom: 24px;
`;

export const Title = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    color: ${({ theme }) => theme.elementColor.portfolio.title};
    @media (max-width: 767px) {
        font-size: 17px;
    }
`;
