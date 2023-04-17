import { ButtonLink } from "../../../../common/ButtonLink/styled";
import { ErrorIcon, Info, Text, Wrapper } from "./styled";

const PortfolioError = () => (
    <Wrapper>
        <ErrorIcon />
        <Text>Ooops! Something went&nbsp;wrong... </Text>
        <Info>
            Sorry, failed to load Github&nbsp;projects.
            <br />
            You can check them directly&nbsp;on&nbsp;Github.
        </Info>
        <ButtonLink
            href={"https://github.com/saimoNN37"}
            title="github.com/saimoNN37"
            target="_blank"
            rel="noreferrer noopener"
        >
            Go to Github
        </ButtonLink>
    </Wrapper>
);
export default PortfolioError;