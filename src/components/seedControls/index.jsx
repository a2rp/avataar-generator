import { FiChevronLeft, FiChevronRight, FiHash } from "react-icons/fi";

import { Styled } from "./styled";

const SeedControls = ({
    seed = "",
    canGoPrevious = false,
    onChange,
    onPrevious,
    onNext,
}) => {
    return (
        <Styled.Wrapper>
            <div className="heading">
                <div>
                    <span className="label">Identity</span>

                    <h2>Avatar Seed</h2>
                </div>
            </div>

            <p className="info">
                Browse different variants of the selected avatar style.
                Previously generated variants remain available during this
                session.
            </p>

            <div className="seedField">
                <FiHash />

                <input
                    type="text"
                    value={seed}
                    onChange={(event) => onChange(event.target.value)}
                    placeholder="Avatar seed"
                    aria-label="Avatar seed"
                    spellCheck="false"
                />
            </div>

            <div className="navigation">
                <button
                    type="button"
                    onClick={onPrevious}
                    disabled={!canGoPrevious}
                    title="Previous avatar variant"
                >
                    <FiChevronLeft />

                    <span>Prev</span>
                </button>

                <button
                    type="button"
                    onClick={onNext}
                    title="Next avatar variant"
                >
                    <span>Next</span>

                    <FiChevronRight />
                </button>
            </div>
        </Styled.Wrapper>
    );
};

export default SeedControls;
