import styled from "styled-components";

export const StyledFooter = styled.div`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    
`;

export const LetsTalk = styled.caption`
font-weight: 700;
font-size: 12px;
color: ${({theme}) => theme.elementColor.footer.letsTalk};
`;

export const AddresEmail = styled.p`
    font-weight: 900;
    font-size: 32px;
    margin: 24px 0 24px;
    color: ${({theme}) => theme.elementColor.footer.email};
`;

export const AboutMe = styled.p`
font-weight: 400;
font-size: 18px;
line-height: 1.4;
color: ${({theme}) => theme.elementColor.footer.aboutMe};
max-width: 670px;
`;

export const styledIcon = (Icon) => styled(Icon)`
width: 48px;
`;

export const Link = styled.a`
text-decoration: none;
color: ${({theme}) => theme.elementColor.footer.icons};
transition: 0.3s;

&:hover {
    color: ${({theme}) => theme.elementColor.footer.iconsHover};
}
`;

export const IconsContainer = styled.div`
display: flex;
gap: 24px;
margin: 56px 0 109px;
`;
