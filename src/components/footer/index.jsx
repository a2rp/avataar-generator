import {
    FiCode,
    FiCoffee,
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiYoutube,
} from "react-icons/fi";

import { Styled } from "./styled";

const Footer = () => {
    return (
        <Styled.Wrapper>
            <div className="inner">
                <div className="brand">
                    <div className="logo">AG</div>

                    <div>
                        <strong>Avataar Generator</strong>

                        <span>Create unique avatars with a2rp.</span>
                    </div>
                </div>

                <div className="links">
                    <a
                        href="https://www.ashishranjan.net"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiGlobe />
                        Portfolio
                    </a>

                    <a
                        href="https://github.com/a2rp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiGithub />
                        GitHub
                    </a>

                    <a
                        href="https://codepen.io/ash1198"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiCode />
                        CodePen
                    </a>

                    <a
                        href="https://www.linkedin.com/in/aashishranjan"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiLinkedin />
                        LinkedIn
                    </a>

                    <a
                        href="https://www.facebook.com/theash.ashish/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiFacebook />
                        Facebook
                    </a>

                    <a
                        href="https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiYoutube />
                        YouTube
                    </a>

                    <a href="mailto:ash.ranjan09@gmail.com">
                        <FiMail />
                        Email
                    </a>
                </div>

                <div className="support">
                    <a
                        href="https://a2rp-donation-page.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiHeart />
                        Support
                    </a>

                    <a
                        href="https://buymeacoffee.com/a2rp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FiCoffee />
                        Buy Me A Coffee
                    </a>

                    <a
                        href="https://patreon.com/a2rp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Patreon
                    </a>
                </div>
            </div>

            <div className="bottom">
                <span>© 2026 Avataar Generator. All rights reserved.</span>

                <span>
                    Developed by{" "}
                    <a
                        href="https://www.ashishranjan.net"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ashish Ranjan
                    </a>
                </span>
            </div>
        </Styled.Wrapper>
    );
};

export default Footer;
