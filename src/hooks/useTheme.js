import { useEffect, useState } from "react";

import { STORAGE_KEYS } from "../data/constants";

const getInitialTheme = () => {
    try {
        const storedTheme = window.localStorage.getItem(STORAGE_KEYS.theme);

        if (storedTheme === "dark" || storedTheme === "light") {
            return storedTheme;
        }
    } catch {
        // Continue with system preference.
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
};

const useTheme = () => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);

        try {
            window.localStorage.setItem(STORAGE_KEYS.theme, theme);
        } catch {
            // Theme still works without persistence.
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark",
        );
    };

    return {
        theme,
        setTheme,
        toggleTheme,
    };
};

export default useTheme;
