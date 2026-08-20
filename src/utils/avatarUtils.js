import { createAvatar } from "@dicebear/core";

import {
    AVATAR_STYLES,
    getAvatarStyle,
    getStylePreviewUrl,
    loadAvatarStyle,
} from "../data/avatarStyles";

import { DEFAULT_CONTROLS } from "../data/constants";

export const normalizeHexColor = (color) => {
    return String(color || "")
        .replace("#", "")
        .trim();
};

export const createRandomSeed = () => {
    if (
        typeof crypto !== "undefined" &&
        typeof crypto.randomUUID === "function"
    ) {
        return crypto.randomUUID().replaceAll("-", "").slice(0, 12);
    }

    return `avatar-${Date.now()}`;
};

export const buildAvatarOptions = ({ seed, controls = DEFAULT_CONTROLS }) => {
    const options = {
        seed: [String(seed || "avatar")],

        scale: controls.scale,

        rotate: controls.rotate,

        radius: controls.radius,

        margin: controls.margin,

        flip: controls.flip,

        idRandomization: true,
    };

    if (!controls.backgroundTransparent && controls.backgroundColor) {
        options.backgroundColor = [normalizeHexColor(controls.backgroundColor)];
    }

    return options;
};

export const generateAvatarSvg = async ({ styleId, seed, controls }) => {
    const styleModule = await loadAvatarStyle(styleId);

    const avatar = createAvatar(
        styleModule,
        buildAvatarOptions({
            seed,
            controls,
        }),
    );

    return avatar.toString();
};

export const createAvatarStyleList = (seed = "a2rp") => {
    return AVATAR_STYLES.map((item) => ({
        ...item,

        previewUrl: getStylePreviewUrl(item.id, seed),
    }));
};

export const createAvatarRecord = ({ styleId, seed, controls, svg }) => {
    const selectedStyle = getAvatarStyle(styleId);

    return {
        id: createRandomSeed(),

        styleId,

        styleName: selectedStyle.name,

        seed,

        controls: {
            ...controls,
        },

        svg,
    };
};

export const getSafeFilename = (value) => {
    const normalized = String(value || "avatar")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    return normalized || "avatar";
};

export const svgToDataUri = (svg) => {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};
