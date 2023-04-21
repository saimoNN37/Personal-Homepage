import styled from "styled-components";

export const HeaderWrapper = styled.div`
display: grid;
grid-template-columns: auto 1fr;
grid-gap: 64px;
margin-top: -10px;
margin-bottom: 63px;

@media (max-width: 767px) {
    grid-template-columns: 1fr;
    margin-top: 32px;
    margin-bottom: 48px;
    grid-gap: 12px;
}
`;

export const Photo = styled.img`
width: 398px;
height: 398px;
border-radius: 50%;
@media (max-width: 767px) {
    height: 126px;
    width: 126px;
}
`;

export const Details = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding-top: 64px;
@media (max-width: 767px) {
    padding: 0;
}
`;

export const ThisIs = styled.p`
font-weight: 700;
font-size: 12px;
color: ${({ theme }) => theme.elementColor.header.thisIs};
margin: 0;
`;

export const Name = styled.h1`
    font-weight: 900;
    font-size: 38px;
    padding: 12px 0 35px;
    color: ${({ theme }) => theme.elementColor.header.name};
    margin: 0;
    @media (max-width: 767px) {
        font-size: 22px;
        padding: 8px 0 16px;
}
`;

export const Text = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    max-width: 640px;
    padding: 0 0 32px;
    @media (max-width: 767px) {
        font-size: 17px;

}
`;