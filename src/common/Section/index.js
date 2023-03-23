import { SectionWrapper, ListName } from "./styled";

const Section = ({ title, body }) => (
    <SectionWrapper>
        <ListName>{title}</ListName>
        {body}
    </SectionWrapper>
);

export default Section;