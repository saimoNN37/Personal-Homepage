import {ReactComponent as GitHubIcon} from "./images/github.svg";
import {ReactComponent as FaceBookIcon} from "./images/facebook.svg"
import {ReactComponent as InstagramIcon} from "./images/instagram.svg"
import {ReactComponent as LinkedinIcon} from "./images/linkedin.svg"
import { styledIcon } from "./styled";


export const socialMedia = [
    {
        name: "Github",
        link: "https://github.com/saimoNN37",
        Icon: styledIcon(GitHubIcon),
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com/szymon.mlynski.3/",
        Icon: styledIcon(FaceBookIcon),
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/808szymson/",
        Icon: styledIcon(InstagramIcon),
    },
    {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/szymon-m%C5%82y%C5%84ski-323169257/",
        Icon: styledIcon(LinkedinIcon),
    },
];