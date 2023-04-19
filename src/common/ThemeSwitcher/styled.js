import styled, {css} from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const StyledButton = styled.button`
    color: ${({ theme }) => theme.elementColor.themeSwitch.text};
    border: none;
    display: flex;
    cursor: pointer;
    background: none;
    align-items: center;
`;

export const Text = styled.p`
    margin-right: 12px;
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;

    @media (max-width: 767px) {
        display: none;
    }
`;

export const IconWrapper = styled.div`
    background: ${({ theme }) => theme.elementColor.themeSwitch.background};
    width: 48px;
    border: 1px solid grey;
    display: flex;
    padding: 2px;
    border-radius: 12px;
`;

export const Switcher = styled.img`
    background: ${({ theme }) => theme.elementColor.themeSwitch.switcherBackground};
    padding: 2px;
    display: flex;
    border-radius: 50%;
    transition: transform 0.5s;
    width: 20px;
    height: 20px;

    ${({ moveRight }) => moveRight && css`
        transform: translateX(22px);
    `};
`;