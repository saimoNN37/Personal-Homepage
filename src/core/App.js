import { ThemeProvider } from "styled-components";
import { Container } from "../common/Container/styled";
import Footer from "../Homepage/Footer";
import Header from "../Homepage/Header";
import Skills from "../Homepage/Skills";
import SkillsToLearn from "../Homepage/SkillsToLearn";
import { GlobalStyle } from "./Globalstyle";
import { darkTheme, lightTheme } from "./theme";
import Portfolio from "../Homepage/Portfolio";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../common/ThemeSwitcher/themeSwitchSlice";
import ThemeSwitcher from "../common/ThemeSwitcher";

function App() {
  const darkModeOff = useSelector(selectIsDarkTheme);
  return (
    <ThemeProvider theme={darkModeOff ? darkTheme : lightTheme}>
      <GlobalStyle />
        <Container>
          <ThemeSwitcher />
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
