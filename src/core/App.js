import { ThemeProvider } from "styled-components";
import { Container } from "../common/Container/styled";
import Header from "../Homepage/Header";
import { GlobalStyle } from "./Globalstyle";
import { lightTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
        <Container>
          <Header />
        </Container>
    </ThemeProvider>
  );
}

export default App;
