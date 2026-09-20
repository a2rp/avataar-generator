import {
    FiCode,
    FiCoffee,
    FiFacebook,
    FiGithub,
    FiGlobe,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiStar,
    FiYoutube,
} from "react-icons/fi";

import { Styled } from "./styled";

const links = [
    {
        label: "Portfolio",
        href: "https://www.ashishranjan.net/",
        Icon: FiGlobe,
    },
    {
        label: "GitHub",
        href: "https://github.com/a2rp",
        Icon: FiGithub,
    },
    {
        label: "CodePen",
        href: "https://codepen.io/ash1198",
        Icon: FiCode,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aashishranjan",
        Icon: FiLinkedin,
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com/theash.ashish/",
        Icon: FiFacebook,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
        Icon: FiYoutube,
    },
    {
        label: "Email",
        href: "mailto:ash.ranjan09@gmail.com",
        Icon: FiMail,
    },
];

const supportLinks = [
    {
        label: "Support",
        href: "https://a2rp-donation-page.netlify.app/",
        Icon: FiHeart,
    },
    {
        label: "Buy Me a Coffee",
        href: "https://buymeacoffee.com/a2rp",
        Icon: FiCoffee,
    },
    {
        label: "Patreon",
        href: "https://www.patreon.com/a2rp",
        Icon: FiStar,
    },
];

const FooterLink = ({ label, href, Icon }) => {
    const isEmail = href.startsWith("mailto:");

    return (
        <a
            href={href}
            {...(!isEmail && {
                target: "_blank",
                rel: "noopener noreferrer",
            })}
            aria-label={label}
            title={label}
        >
            <Icon aria-hidden="true" />
        </a>
    );
};

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

                <div className="links" aria-label="Social links">
                    {links.map((link) => (
                        <FooterLink key={link.label} {...link} />
                    ))}
                </div>

                <div className="support" aria-label="Support links">
                    {supportLinks.map((link) => (
                        <FooterLink key={link.label} {...link} />
                    ))}
                </div>
            </div>

            <div className="bottom">
                <span>
                    Copyright &copy; {new Date().getFullYear()} {" "}
                    <a
                        href="https://www.ashishranjan.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ashish Ranjan
                    </a>
                </span>
            </div>
        </Styled.Wrapper>
    );
};

export default Footer;
