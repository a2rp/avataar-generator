import styled from "styled-components";

export const Styled = {
    Wrapper: styled.button`
        position: fixed;
        right: 18px;
        bottom: 18px;
        z-index: 80;

        width: 40px;
        height: 40px;

        display: grid;
        place-items: center;

        border: 1px solid var(--border-color);
        border-radius: 11px;

        background: var(--surface-color);
        color: var(--text-soft-color);

        box-shadow: 0 14px 40px var(--shadow-color);

        cursor: pointer;

        transition:
            transform 160ms ease,
            border-color 160ms ease,
            background 160ms ease;

        &:hover {
            transform: translateY(-2px);

            border-color: var(--border-strong-color);

            background: var(--surface-strong-color);
        }

        svg {
            width: 16px;
            height: 16px;
        }
    `,
};
