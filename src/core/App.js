import { ThemeProvider } from "styled-components";
import { Container } from "../Homepage/Container/styled";
import { GlobalStyle } from "./Globalstyle";
import { lightTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle>
        <Container>
          
        </Container>
      </GlobalStyle>
    </ThemeProvider>
  );
}

export default App;
