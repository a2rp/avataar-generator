import { FiGithub, FiMoon, FiSun } from "react-icons/fi";

import { Styled } from "./styled";

const Header = ({ theme, onToggleTheme }) => {
    return (
        <Styled.Wrapper>
            <div className="inner">
                <div className="brand">
                    <div className="logo">AG</div>

                    <div>
                        <h1>Avataar Generator</h1>

                        <p>Create, customize, and export unique avatars.</p>
                    </div>
                </div>

                <div className="actions">
                    <a
                        href="https://github.com/a2rp/avataar-generator"
                        target="_blank"
                        rel="noreferrer"
                        title="View GitHub repository"
                        aria-label="View GitHub repository"
                    >
                        <FiGithub />
                    </a>

                    <button
                        type="button"
                        onClick={onToggleTheme}
                        title={
                            theme === "dark"
                                ? "Switch to light theme"
                                : "Switch to dark theme"
                        }
                        aria-label={
                            theme === "dark"
                                ? "Switch to light theme"
                                : "Switch to dark theme"
                        }
                    >
                        {theme === "dark" ? <FiSun /> : <FiMoon />}
                    </button>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Header;
