import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: fixed;
        right: 18px;
        bottom: 18px;
        z-index: 300;

        width: min(360px, calc(100% - 36px));

        padding: 11px 12px;

        display: grid;
        grid-template-columns:
            auto
            minmax(0, 1fr)
            auto;
        align-items: center;
        gap: 9px;

        border: 1px solid var(--border-color);
        border-radius: 12px;

        background: var(--surface-color);

        box-shadow: 0 20px 60px var(--shadow-color);

        span {
            font-size: 0.66rem;
        }

        .statusIcon {
            width: 16px;
            height: 16px;
        }

        button {
            width: 28px;
            height: 28px;

            display: grid;
            place-items: center;

            border-radius: 7px;

            cursor: pointer;

            &:hover {
                background: var(--surface-soft-color);
            }
        }

        &.success {
            border-color: color-mix(
                in srgb,
                var(--success-color) 40%,
                var(--border-color)
            );

            .statusIcon {
                color: var(--success-color);
            }
        }

        &.error {
            border-color: color-mix(
                in srgb,
                var(--danger-color) 40%,
                var(--border-color)
            );

            .statusIcon {
                color: var(--danger-color);
            }
        }

        &.info .statusIcon {
            color: var(--info-color);
        }
    `,
};
