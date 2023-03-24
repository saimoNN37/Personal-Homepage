import { email } from "../email";
import { socialMedia } from "./socialMedia";
import { AboutMe, AddresEmail, IconsContainer, LetsTalk, Link, StyledFooter } from "./styled";

const Footer = () => (
    <StyledFooter>
        <LetsTalk>Let's Talk</LetsTalk>
        <AddresEmail>{email}</AddresEmail>
        <AboutMe>
            I'm always open to new projects whenever I have the time. If you have a website,
            dashboard or mobile app in mind and need some help to make your ideas come to life,
            feel free to conatct me
        </AboutMe>
        <IconsContainer>
            {socialMedia.map(({Icon, link, name}) =>(
                <Link
                    key={name}
                    href={link}
                    title={name}
                    rel="noreferrer"
                >
                    <Icon />
                </Link>
            ))}
        </IconsContainer>
    </StyledFooter>
);

export default Footer;