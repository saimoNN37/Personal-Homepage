import { skills } from "./skills";
import { nanoid } from "@reduxjs/toolkit";
import Section from "../../common/Section";
import List from "../../common/List";

const Skills = () => {
    const skillsIndex = skills.map((skill) => ({
        ...skill,
        id: nanoid(),
    }));

    return (
        <Section
         title={"My skill set includes 🛠️"}
         body={<List listContent={skillsIndex}/>}
        >
        </Section>
    );
};

export default Skills;

