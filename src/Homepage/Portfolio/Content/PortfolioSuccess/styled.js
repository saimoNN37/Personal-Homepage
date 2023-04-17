import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    max-width: 1216px;
    list-style: none;
    padding: 0;
    gap: 32px;
`;

export const StyledTile = styled.li`
    width: 592px;
    padding: 56px;
    margin: 0;
    border: 6px solid ${({ theme }) => theme.elementColor.portfolio.border};
    box-shadow: 0px -2px 50px ${({ theme }) => theme.elementColor.portfolio.shadow}, 0px 16px 58px ${({ theme }) => theme.elementColor.portfolio.shadow};
    background-color: ${({ theme }) => theme.elementColor.portfolio.background};
    border-radius: 4px;
`;

export const Container = styled.div`
    font-weight: 400;
    font-size: 18px;
    
`;

export const TileTitle = styled.h3`
    margin: 0;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.elementColor.portfolio.tileTitle};
    @media (max-width: 767px) {
        font-size: 16px;
        line-height: 19px;
    }
`;

export const TileDescription = styled.p`
    line-height: 1.4;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.elementColor.portfolio.secondText};
    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 17px;
    }
`;

export const LinksWrapper = styled.div`
    display: grid;
    grid-template-columns: 3.5em 1fr;
    word-break: break-all;
    line-height: 1.4;
    margin-top: 24px;
    margin-bottom: 0;
    padding-bottom: 8px;
    color: ${({ theme }) => theme.elementColor.portfolio.secondText};

    @media (max-width: 767px) {
        font-size: 14px;
        line-height: 17px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.elementColor.portfolio.tileLink};
    
    &:hover {
        transition: 0.5s;
        color: ${({theme}) => theme.elementColor.portfolio.secondText};
    }
`;