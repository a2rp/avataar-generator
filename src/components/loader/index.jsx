import { Styled } from "./styled";

const Loader = ({ text = "Loading avatar..." }) => {
    return (
        <Styled.Wrapper role="status" aria-live="polite">
            <span className="spinner" />

            <span className="text">{text}</span>
        </Styled.Wrapper>
    );
};

export default Loader;
