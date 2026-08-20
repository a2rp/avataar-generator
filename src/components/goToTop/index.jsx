import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

import { Styled } from "./styled";

const GoToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 500);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <Styled.Wrapper
            type="button"
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
            title="Go to top"
            aria-label="Go to top"
        >
            <FiArrowUp />
        </Styled.Wrapper>
    );
};

export default GoToTop;
