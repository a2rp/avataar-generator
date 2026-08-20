export const copyText = async (value) => {
    if (!value) {
        return false;
    }

    try {
        await navigator.clipboard.writeText(String(value));

        return true;
    } catch {
        try {
            const textarea = document.createElement("textarea");

            textarea.value = String(value);

            textarea.setAttribute("readonly", "");

            textarea.style.position = "fixed";

            textarea.style.opacity = "0";

            textarea.style.pointerEvents = "none";

            document.body.appendChild(textarea);

            textarea.select();

            const copied = document.execCommand("copy");

            textarea.remove();

            return copied;
        } catch {
            return false;
        }
    }
};

export const copyJson = async (value) => {
    return copyText(JSON.stringify(value, null, 2));
};
