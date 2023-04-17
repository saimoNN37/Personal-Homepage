import Content from "./Content";
import { fetchPortfolio, selectRepositories, selectRepositoriesStatus } from "./portfolioSlice";
import { Header, Icon, Section, Title, SubHeader } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const Portfolio = () => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchPortfolio());
    }, [dispatch]);

    return (
        <Section>
            <Header>
                <Icon />
                <SubHeader>Portfolio</SubHeader>
                <Title>My recent projects</Title>
            </Header>
            <Content repositories={repositories} state={repositoriesStatus} />
        </Section>
    );
};

export default Portfolio;