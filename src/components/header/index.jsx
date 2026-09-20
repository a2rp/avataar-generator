import { useEffect, useState } from "react";
import { FiGithub, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

import { Styled } from "./styled";

const Header = ({ theme, onToggleTheme }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        let previousScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsVisible(
                currentScrollY <= 0 || currentScrollY < previousScrollY,
            );

            previousScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const handleThemeToggle = () => {
        onToggleTheme();
        setIsMenuOpen(false);
    };

    return (
        <Styled.Wrapper className={isVisible ? "" : "hidden"}>
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
                        className="desktopAction iconButton"
                        href="https://github.com/a2rp/avataar-generator"
                        target="_blank"
                        rel="noreferrer"
                        title="View GitHub repository"
                        aria-label="View GitHub repository"
                    >
                        <FiGithub />
                    </a>

                    <button
                        className="desktopAction iconButton"
                        type="button"
                        onClick={handleThemeToggle}
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

                    <button
                        className="menuButton"
                        type="button"
                        onClick={() => setIsMenuOpen((current) => !current)}
                        aria-expanded={isMenuOpen}
                        aria-controls="avatar-generator-mobile-menu"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        title={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            <div
                id="avatar-generator-mobile-menu"
                className={isMenuOpen ? "mobileMenu open" : "mobileMenu"}
                aria-hidden={!isMenuOpen}
            >
                <a
                    href="https://github.com/a2rp/avataar-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <FiGithub />
                    GitHub Repository
                </a>

                <button type="button" onClick={handleThemeToggle}>
                    {theme === "dark" ? <FiSun /> : <FiMoon />}
                    {theme === "dark"
                        ? "Switch to light theme"
                        : "Switch to dark theme"}
                </button>
            </div>
        </Styled.Wrapper>
    );
};

export default Header;
