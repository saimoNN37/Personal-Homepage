import { Photo, HeaderWrapper, Details, ThisIs, Name, Text } from "./styled";
import image from "./image/author.jpg";
import { ButtonLink } from "../../common/ButtonLink/styled";
import { ReactComponent as MessageIcon } from "./image/message.svg";
import { email } from "../email";
import ThemeSwitcher from "../../common/ThemeSwitcher";

const Header = () => (
    <HeaderWrapper>
        <Photo src={image} alt="Szymon Młyński" />
        <Details>
            <ThisIs>This is</ThisIs>
            <Name>Szymon Młyński</Name>
            <Text>👨🏻‍💻  I'm a passionate Frontend Developer in love with React,currently looking for new job opportunities.</Text>
            <ButtonLink 
            href={`mailto:${email}`}
            title={email}
            >
            <MessageIcon />
            Hire Me
            </ButtonLink>
        </Details>
        <ThemeSwitcher />
    </HeaderWrapper>
);

export default Header;
