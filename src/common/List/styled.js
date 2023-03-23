import styled from "styled-components";

export const StyledList = styled.ul`
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.elementColor.list.text};
    margin: 32px 0 0;
    display: grid;
    grid-gap: 8px 32px;
    grid-template-columns: repeat(3, 1fr);
`;

export const ListItem = styled.li`
list-style: none;
line-height: 1.4;
display: flex;
align-items: center;

&::before {
    content: "";
    width: 9px;
    height: 9px;
    background-color: ${({theme}) => theme.elementColor.list.eclipse};
    border-radius: 50%;
    display: inline-block;
    margin-right: 16px;
    

}
`;