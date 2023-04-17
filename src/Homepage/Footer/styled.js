import styled from "styled-components";

export const StyledFooter = styled.div`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @media (max-width: 767px) {
        margin-top: 48px;
    }
`;

export const LetsTalk = styled.caption`
font-weight: 700;
font-size: 12px;
color: ${({ theme }) => theme.elementColor.footer.letsTalk};
`;

export const AddresEmail = styled.p`
    font-weight: 900;
    font-size: 32px;
    margin: 24px 0 24px;
    color: ${({ theme }) => theme.elementColor.footer.email};
    @media (max-width: 767px) {
        font-size: 18px;
        margin: 12px 0 12px;
    }
`;

export const AboutMe = styled.p`
font-weight: 400;
font-size: 18px;
line-height: 1.4;
color: ${({ theme }) => theme.elementColor.footer.aboutMe};
max-width: 670px;
@media (max-width: 767px) {
     font-size: 14px;
     line-height: 17px;
    }
`;

export const styledIcon = (Icon) => styled(Icon)`
width: 48px;
transition: 0.3s;
color: ${({ theme }) => theme.elementColor.footer.icons};
@media (max-width: 767px) {
        width: 32px;
    }

&:hover {
    color: ${({ theme }) => theme.elementColor.footer.iconsHover};
}
`;

export const Link = styled.a`
text-decoration: none;
`;

export const IconsContainer = styled.div`
display: flex;
gap: 24px;
margin: 56px 0 109px;
@media (max-width: 767px) {
    margin: 12px 0 40px;
    gap: 16px;
    }
`;
