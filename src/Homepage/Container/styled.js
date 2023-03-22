import styled from "styled-components";

export const Container = styled.div`
background-color: ${({theme}) => theme.elementColor.site.background};
color: ${({theme}) => theme.elementColor.site.text};
margin: auto;
max-width: 1216px;
`;