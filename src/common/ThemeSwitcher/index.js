import { useDispatch, useSelector } from "react-redux";
import { Wrapper, IconWrapper, Text, Switcher, StyledButton } from "./styled";
import { selectIsDarkTheme, toogleTheme } from "./themeSwitchSlice";
import light from "./icons/light.svg";
import dark from "./icons/dark.svg";

const ThemeSwitcher = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <StyledButton onClick={() => dispatch(toogleTheme())}>
                <Text>DARK MODE {isDarkTheme ? "ON" : "OFF"}</Text>
                <IconWrapper>
                    <Switcher
                        src={isDarkTheme ? dark : light}
                        moveRight={isDarkTheme}
                    >
                    </Switcher>
                </IconWrapper>
            </StyledButton>
        </Wrapper>
    )
};

export default ThemeSwitcher;