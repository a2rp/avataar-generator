import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: sticky;
        top: 0;
        z-index: 100;

        width: 100%;

        border-bottom: 1px solid var(--border-color);

        background: color-mix(
            in srgb,
            var(--background-color) 88%,
            transparent
        );

        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);

        .inner {
            width: min(1400px, calc(100% - 40px));

            min-height: 76px;

            margin: 0 auto;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 24px;
        }

        .brand {
            min-width: 0;

            display: flex;
            align-items: center;
            gap: 12px;
        }

        .logo {
            flex: 0 0 auto;

            width: 40px;
            height: 40px;

            display: grid;
            place-items: center;

            border: 1px solid var(--border-color);
            border-radius: 12px;

            background: var(--surface-soft-color);
            color: var(--text-color);

            font-size: 0.76rem;
            font-weight: 800;

            letter-spacing: 0.04em;
        }

        .brandText {
            min-width: 0;

            h1 {
                overflow: hidden;

                color: var(--text-color);

                font-size: 1.05rem;
                font-weight: 800;
                line-height: 1.2;

                text-overflow: ellipsis;
                white-space: nowrap;
            }

            p {
                margin-top: 3px;

                overflow: hidden;

                color: var(--text-muted-color);

                font-size: 0.66rem;
                line-height: 1.3;

                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }

        .actions {
            flex: 0 0 auto;

            display: flex;
            align-items: center;
            gap: 8px;
        }

        .actionButton,
        .iconButton {
            min-height: 38px;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            background: var(--surface-soft-color);
            color: var(--text-soft-color);

            cursor: pointer;

            transition:
                background 160ms ease,
                border-color 160ms ease,
                color 160ms ease,
                transform 160ms ease;
        }

        .actionButton {
            padding: 8px 12px;

            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 7px;

            font-size: 0.68rem;
            font-weight: 700;

            svg {
                width: 14px;
                height: 14px;
            }
        }

        .iconButton {
            width: 38px;

            display: grid;
            place-items: center;

            svg {
                width: 15px;
                height: 15px;
            }
        }

        .actionButton:hover,
        .iconButton:hover {
            border-color: var(--border-strong-color);

            background: var(--surface-strong-color);

            color: var(--text-color);

            transform: translateY(-1px);
        }

        .actionButton:active,
        .iconButton:active {
            transform: translateY(0);
        }

        @media (max-width: 720px) {
            .inner {
                width: min(100% - 24px, 1400px);

                min-height: 68px;
            }

            .brandText p {
                display: none;
            }

            .actionButton span {
                display: none;
            }

            .actionButton {
                width: 38px;
                padding: 0;
            }
        }

        @media (max-width: 480px) {
            .brandText h1 {
                max-width: 150px;

                font-size: 0.92rem;
            }

            .actions {
                gap: 6px;
            }
        }
    `,
};
