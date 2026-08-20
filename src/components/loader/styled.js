import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        display: grid;
        justify-items: center;
        gap: 10px;

        padding: 20px;

        color: var(--text-muted-color);

        .spinner {
            width: 34px;
            height: 34px;

            border: 3px solid var(--surface-strong-color);

            border-top-color: var(--text-color);

            border-radius: 50%;

            animation: avatarLoaderSpin 700ms linear infinite;
        }

        .text {
            font-size: 0.58rem;
            font-weight: 700;
        }

        @keyframes avatarLoaderSpin {
            to {
                transform: rotate(360deg);
            }
        }
    `,
};
