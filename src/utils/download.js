const triggerDownload = (url, filename) => {
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = filename;

    document.body.appendChild(anchor);

    anchor.click();
    anchor.remove();
};

export const downloadSvg = (svg, filename = "avatar.svg") => {
    if (!svg) {
        return false;
    }

    const blob = new Blob([svg], {
        type: "image/svg+xml;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    triggerDownload(url, filename);

    URL.revokeObjectURL(url);

    return true;
};

const loadSvgImage = (svg) => {
    return new Promise((resolve, reject) => {
        const blob = new Blob([svg], {
            type: "image/svg+xml;charset=utf-8",
        });

        const url = URL.createObjectURL(blob);

        const image = new Image();

        image.onload = () => {
            URL.revokeObjectURL(url);

            resolve(image);
        };

        image.onerror = () => {
            URL.revokeObjectURL(url);

            reject(new Error("Unable to load SVG image."));
        };

        image.src = url;
    });
};

export const downloadPng = async (
    svg,
    filename = "avatar.png",
    size = 1024,
) => {
    if (!svg) {
        return false;
    }

    const image = await loadSvgImage(svg);

    const canvas = document.createElement("canvas");

    canvas.width = size;
    canvas.height = size;

    const context = canvas.getContext("2d");

    if (!context) {
        throw new Error("Canvas is not supported.");
    }

    context.clearRect(0, 0, size, size);

    context.drawImage(image, 0, 0, size, size);

    const blob = await new Promise((resolve) => {
        canvas.toBlob(resolve, "image/png", 1);
    });

    if (!blob) {
        throw new Error("Unable to create PNG.");
    }

    const url = URL.createObjectURL(blob);

    triggerDownload(url, filename);

    URL.revokeObjectURL(url);

    return true;
};
