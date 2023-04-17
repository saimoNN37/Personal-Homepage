import styled from "styled-components";

export const SectionWrapper = styled.div`
    background-color: ${({ theme }) => theme.elementColor.section.background};
    border-radius: 4px;
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
     0px 16px 58px rgba(9, 10, 51, 0.03);
    padding: 32px;
    margin-bottom: 72px;
    @media (max-width: 767px) {
        padding: 16px;
        margin-bottom: 50px;
    }
    `;

export const ListName = styled.h2`
    font-weight: 900;
    color: ${({ theme }) => theme.elementColor.section.header};
    font-size: 30px;
    margin: 0;
    padding: 0 0 15px;
    border-bottom: 1px solid #D1D5DA;
    @media (max-width: 767px) {
        font-size: 18px;
        line-height: 22px;
    }
`;