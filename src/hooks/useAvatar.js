import { useEffect, useMemo, useState } from "react";

import {
    DEFAULT_CONTROLS,
    DEFAULT_SEED,
    MAX_FAVORITES,
    STORAGE_KEYS,
} from "../data/constants";

import { DEFAULT_STYLE_ID, getAvatarStyle } from "../data/avatarStyles";

import useLocalStorage from "./useLocalStorage";

import {
    createAvatarRecord,
    createAvatarStyleList,
    createRandomSeed,
    generateAvatarSvg,
} from "../utils/avatarUtils";

const createInitialHistory = () => ({
    items: [DEFAULT_SEED],
    index: 0,
});

const useAvatar = () => {
    const [seed, setSeedValue] = useState(DEFAULT_SEED);

    const [selectedStyleId, setSelectedStyleId] = useState(DEFAULT_STYLE_ID);

    const [controls, setControls] = useState({
        ...DEFAULT_CONTROLS,
    });

    const [svg, setSvg] = useState("");

    const [isAvatarLoading, setIsAvatarLoading] = useState(true);

    const [avatarError, setAvatarError] = useState("");

    const [styleHistories, setStyleHistories] = useState(() => ({
        [DEFAULT_STYLE_ID]: createInitialHistory(),
    }));

    const [favorites, setFavorites] = useLocalStorage(
        STORAGE_KEYS.favorites,
        [],
    );

    const selectedStyle = useMemo(
        () => getAvatarStyle(selectedStyleId),
        [selectedStyleId],
    );

    /*
     * Style selector previews stay fixed.
     * They do not change with the user's
     * current seed or Prev/Next navigation.
     */
    const styles = useMemo(() => createAvatarStyleList(DEFAULT_SEED), []);

    /*
     * Only the currently selected DiceBear
     * style is loaded.
     *
     * Rapid style/seed/control changes are
     * protected from stale async responses.
     */
    useEffect(() => {
        let active = true;

        const createCurrentAvatar = async () => {
            setIsAvatarLoading(true);

            setAvatarError("");

            try {
                const nextSvg = await generateAvatarSvg({
                    styleId: selectedStyleId,

                    seed,

                    controls,
                });

                if (!active) {
                    return;
                }

                setSvg(nextSvg);
            } catch {
                if (!active) {
                    return;
                }

                setSvg("");

                setAvatarError("Unable to load this avatar style.");
            } finally {
                if (active) {
                    setIsAvatarLoading(false);
                }
            }
        };

        createCurrentAvatar();

        return () => {
            active = false;
        };
    }, [controls, seed, selectedStyleId]);

    const currentAvatar = useMemo(
        () => ({
            styleId: selectedStyleId,

            styleName: selectedStyle.name,

            seed,

            controls,

            svg,
        }),
        [controls, seed, selectedStyle, selectedStyleId, svg],
    );

    const isFavorite = useMemo(
        () =>
            favorites.some(
                (item) =>
                    item.styleId === selectedStyleId && item.seed === seed,
            ),
        [favorites, seed, selectedStyleId],
    );

    const currentStyleHistory = styleHistories[selectedStyleId];

    const canGoPrevious = Boolean(
        currentStyleHistory && currentStyleHistory.index > 0,
    );

    const updateControl = (name, value) => {
        setControls((currentControls) => ({
            ...currentControls,

            [name]: value,
        }));
    };

    const resetControls = () => {
        setControls({
            ...DEFAULT_CONTROLS,
        });
    };

    const setSeed = (value) => {
        setSeedValue(value);

        setStyleHistories((currentHistories) => {
            const history = currentHistories[selectedStyleId];

            if (!history) {
                return {
                    ...currentHistories,

                    [selectedStyleId]: {
                        items: [value],

                        index: 0,
                    },
                };
            }

            const items = [...history.items];

            items[history.index] = value;

            return {
                ...currentHistories,

                [selectedStyleId]: {
                    ...history,

                    items,
                },
            };
        });
    };

    const createVariantSeed = (styleId) => {
        return `${styleId}-${createRandomSeed()}`;
    };

    const selectStyle = (styleId) => {
        if (styleId === selectedStyleId) {
            return;
        }

        const existingHistory = styleHistories[styleId];

        if (existingHistory) {
            setSelectedStyleId(styleId);

            setSeedValue(existingHistory.items[existingHistory.index]);

            return;
        }

        const newHistory = createInitialHistory();

        setStyleHistories((currentHistories) => ({
            ...currentHistories,

            [styleId]: newHistory,
        }));

        setSelectedStyleId(styleId);

        setSeedValue(newHistory.items[0]);
    };

    const previousVariant = () => {
        const history = styleHistories[selectedStyleId];

        if (!history || history.index <= 0) {
            return;
        }

        const nextIndex = history.index - 1;

        setStyleHistories((currentHistories) => ({
            ...currentHistories,

            [selectedStyleId]: {
                ...currentHistories[selectedStyleId],

                index: nextIndex,
            },
        }));

        setSeedValue(history.items[nextIndex]);
    };

    const nextVariant = () => {
        const history = styleHistories[selectedStyleId] || {
            items: [seed],
            index: 0,
        };

        const hasForwardHistory = history.index < history.items.length - 1;

        if (hasForwardHistory) {
            const nextIndex = history.index + 1;

            setStyleHistories((currentHistories) => ({
                ...currentHistories,

                [selectedStyleId]: {
                    ...currentHistories[selectedStyleId],

                    index: nextIndex,
                },
            }));

            setSeedValue(history.items[nextIndex]);

            return;
        }

        const newSeed = createVariantSeed(selectedStyleId);

        const items = [...history.items, newSeed];

        setStyleHistories((currentHistories) => ({
            ...currentHistories,

            [selectedStyleId]: {
                items,

                index: items.length - 1,
            },
        }));

        setSeedValue(newSeed);
    };

    const loadAvatar = (avatar) => {
        if (!avatar) {
            return;
        }

        const nextStyleId = avatar.styleId || selectedStyleId;

        const nextSeed = avatar.seed || seed;

        setSelectedStyleId(nextStyleId);

        setSeedValue(nextSeed);

        setStyleHistories((currentHistories) => {
            const existingHistory = currentHistories[nextStyleId];

            if (!existingHistory) {
                return {
                    ...currentHistories,

                    [nextStyleId]: {
                        items: [nextSeed],

                        index: 0,
                    },
                };
            }

            const existingIndex = existingHistory.items.indexOf(nextSeed);

            if (existingIndex !== -1) {
                return {
                    ...currentHistories,

                    [nextStyleId]: {
                        ...existingHistory,

                        index: existingIndex,
                    },
                };
            }

            const items = [...existingHistory.items, nextSeed];

            return {
                ...currentHistories,

                [nextStyleId]: {
                    items,

                    index: items.length - 1,
                },
            };
        });

        if (avatar.controls) {
            setControls({
                ...DEFAULT_CONTROLS,
                ...avatar.controls,
            });
        }
    };

    const toggleFavorite = () => {
        if (isAvatarLoading || !svg) {
            return null;
        }

        const existing = favorites.find(
            (item) => item.styleId === selectedStyleId && item.seed === seed,
        );

        if (existing) {
            setFavorites((current) =>
                current.filter((item) => item.id !== existing.id),
            );

            return false;
        }

        const record = createAvatarRecord(currentAvatar);

        setFavorites((current) => [record, ...current].slice(0, MAX_FAVORITES));

        return true;
    };

    const removeFavorite = (id) => {
        setFavorites((current) => current.filter((item) => item.id !== id));
    };

    const clearFavorites = () => {
        setFavorites([]);
    };

    return {
        seed,
        setSeed,

        selectedStyleId,
        selectedStyle,

        controls,

        svg,

        isAvatarLoading,
        avatarError,

        styles,

        currentAvatar,

        favorites,
        isFavorite,

        canGoPrevious,

        setSelectedStyleId: selectStyle,

        updateControl,

        resetControls,

        previousVariant,
        nextVariant,

        loadAvatar,

        toggleFavorite,

        removeFavorite,
        clearFavorites,
    };
};

export default useAvatar;
