import { ThemeProvider } from "styled-components";
import { Container } from "../common/Container/styled";
import Footer from "../Homepage/Footer";
import Header from "../Homepage/Header";
import Skills from "../Homepage/Skills";
import SkillsToLearn from "../Homepage/SkillsToLearn";
import { GlobalStyle } from "./Globalstyle";
import { lightTheme } from "./theme";
import Portfolio from "../Homepage/Portfolio";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
        <Container>
          <Header />
          <Skills />
          <SkillsToLearn />
          <Portfolio />
          <Footer />
        </Container>
    </ThemeProvider>
  );
}

export default App;
