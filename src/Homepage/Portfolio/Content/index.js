import PortfolioError from "./PortfolioError";
import PortfolioLoading from "./PortfolioLoading";
import PortfolioSuccess from "./PortfolioSuccess";


const Content = ({ state, repositories }) => {
    switch (state) {
        case "initial":
            return null;
        case "loading":
            return <PortfolioLoading />
        case "error":
            return <PortfolioError />
        case "success":
            return <PortfolioSuccess repositories={repositories} />        
        default:
            throw new Error(`incorrect state: ${state}`)
    };
};

export default Content;