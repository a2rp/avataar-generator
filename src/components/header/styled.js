import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        top: 0;
        z-index: 100;

        width: 100%;

        transform: translateY(0);

        transition: transform 220ms ease;

        &.hidden {
            transform: translateY(-100%);
        }

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
        .iconButton,
        .menuButton {
            min-height: 38px;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            background: var(--surface-soft-color);
            color: var(--text-soft-color);

            cursor: pointer;

            transition:
                box-shadow 160ms ease,
                text-shadow 160ms ease;
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

        .iconButton,
        .menuButton {
            width: 38px;

            display: grid;
            place-items: center;

            svg {
                width: 15px;
                height: 15px;
            }
        }

        .actionButton:hover,
        .iconButton:hover,
        .menuButton:hover {
            box-shadow: 0 8px 22px var(--shadow-color);
            text-shadow: 0 0 12px var(--text-soft-color);
        }

        .menuButton {
            display: none;
        }

        .mobileMenu {
            display: none;
        }

        @media (max-width: 720px) {
            .inner {
                width: min(100% - 24px, 1400px);

                min-height: 68px;
            }

            .brandText p {
                display: none;
            }

            .desktopAction {
                display: none;
            }

            .menuButton {
                display: grid;
            }

            .mobileMenu {
                width: min(100% - 24px, 1400px);

                margin: 0 auto;
                padding: 8px 0 14px;

                grid-template-columns: 1fr;
                gap: 6px;

                &.open {
                    display: grid;
                }

                a,
                button {
                    min-height: 40px;

                    padding: 8px 10px;

                    display: flex;
                    align-items: center;
                    gap: 8px;

                    border: 1px solid var(--border-color);
                    border-radius: 9px;

                    background: var(--surface-soft-color);
                    color: var(--text-soft-color);

                    font-size: 0.66rem;
                    font-weight: 700;
                    text-align: left;

                    cursor: pointer;

                    transition:
                        box-shadow 160ms ease,
                        text-shadow 160ms ease;

                    &:hover {
                        box-shadow: 0 8px 22px var(--shadow-color);
                        text-shadow: 0 0 12px var(--text-soft-color);
                    }

                    svg {
                        width: 15px;
                        height: 15px;
                    }
                }
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
