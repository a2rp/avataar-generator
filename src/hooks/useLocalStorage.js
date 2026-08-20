import { useCallback, useState } from "react";

const getStoredValue = (key, initialValue) => {
    try {
        const storedValue = window.localStorage.getItem(key);

        if (storedValue === null) {
            return typeof initialValue === "function"
                ? initialValue()
                : initialValue;
        }

        return JSON.parse(storedValue);
    } catch {
        return typeof initialValue === "function"
            ? initialValue()
            : initialValue;
    }
};

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => getStoredValue(key, initialValue));

    const updateValue = useCallback(
        (nextValue) => {
            setValue((currentValue) => {
                const resolvedValue =
                    typeof nextValue === "function"
                        ? nextValue(currentValue)
                        : nextValue;

                try {
                    window.localStorage.setItem(
                        key,
                        JSON.stringify(resolvedValue),
                    );
                } catch {
                    // Keep application state working
                    // even if browser storage fails.
                }

                return resolvedValue;
            });
        },
        [key],
    );

    const removeValue = useCallback(() => {
        try {
            window.localStorage.removeItem(key);
        } catch {
            // Ignore storage errors.
        }

        setValue(
            typeof initialValue === "function" ? initialValue() : initialValue,
        );
    }, [initialValue, key]);

    return [value, updateValue, removeValue];
};

export default useLocalStorage;
