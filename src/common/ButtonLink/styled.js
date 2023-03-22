import styled from "styled-components";

export const ButtonLink = styled.a`
    color: ${({ theme }) => theme.elementColor.buttonLink.text};
    background-color: ${({theme}) => theme.elementColor.buttonLink.background};
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    padding: 12px 16px;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-decoration: none;
    gap: 16px;
    transition: 0.5s;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        box-shadow:
            2px -2px 0px ${({ theme }) => theme.elementColor.buttonLink.shadow},
            -2px 2px 0px ${({ theme }) => theme.elementColor.buttonLink.shadow},
            2px 2px 0px ${({ theme }) => theme.elementColor.buttonLink.shadow},
            -2px -2px 0px ${({ theme }) => theme.elementColor.buttonLink.shadow};
    }

    &:active {
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    }
`;