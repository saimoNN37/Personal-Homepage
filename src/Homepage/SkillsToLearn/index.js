import { nanoid } from "@reduxjs/toolkit";
import Section from "../../common/Section";
import List from "../../common/List";
import { skillsToLearn } from "./skillsToLearn";

const SkillsToLearn = () => {
    const skillsToLearnIndex = skillsToLearn.map((skill) => ({
        ...skill,
        id: nanoid(),
    }));

    return (
        <Section
         title={"What I want to learn next 🚀"}
         body={<List listContent={skillsToLearnIndex}/>}
        >
        </Section>
    );
};

export default SkillsToLearn;

