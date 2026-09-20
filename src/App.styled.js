import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        width: 100%;
        min-height: 100vh;

        background: var(--background-color);
        color: var(--text-color);

        .main {
            width: min(1460px, calc(100% - 32px));

            margin: 0 auto;

            padding-top: 92px;
        }

        .label {
            color: var(--text-muted-color);

            font-size: 0.56rem;
            font-weight: 700;

            letter-spacing: 0.11em;
            text-transform: uppercase;
        }

        .intro {
            min-height: 92px;

            padding: 14px 4px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 30px;

            border-bottom: 1px solid var(--border-color);
        }

        .introText {
            min-width: 0;
        }

        .introTitle {
            margin-top: 4px;

            display: flex;
            align-items: baseline;
            gap: 16px;

            h2 {
                flex: 0 0 auto;

                font-size: clamp(1.6rem, 2.5vw, 2.45rem);

                line-height: 1;

                letter-spacing: -0.035em;
            }

            p {
                max-width: 620px;

                color: var(--text-muted-color);

                font-size: 0.64rem;
                line-height: 1.6;
            }
        }

        .stats {
            flex: 0 0 auto;

            display: flex;
            gap: 7px;

            div {
                min-width: 76px;

                padding: 8px 10px;

                border: 1px solid var(--border-color);
                border-radius: 9px;

                background: var(--surface-color);

                strong,
                span {
                    display: block;
                }

                strong {
                    font-size: 0.92rem;
                    line-height: 1;
                }

                span {
                    margin-top: 3px;

                    color: var(--text-muted-color);

                    font-size: 0.48rem;
                }
            }
        }

        /*
         * Primary workspace.
         * Desktop version fits inside approximately one viewport.
         */
        .workspace {
            height: min(690px, calc(100vh - 184px));

            min-height: 590px;

            padding: 12px 0;

            display: grid;
            grid-template-columns:
                minmax(360px, 1.05fr)
                minmax(285px, 0.72fr)
                minmax(365px, 0.94fr);

            gap: 10px;
        }

        .previewArea,
        .settingsArea,
        .stylesArea {
            min-width: 0;
            min-height: 0;
        }

        .previewArea {
            display: grid;
            grid-template-rows:
                minmax(0, 1fr)
                auto;
            gap: 8px;
        }

        .settingsArea {
            display: grid;
            grid-template-rows:
                auto
                minmax(0, 1fr);
            gap: 8px;
        }

        .stylesArea {
            overflow: hidden;
        }

        /*
         * Secondary features are inside one tabbed panel.
         */
        .library {
            margin-top: 6px;
            padding: 18px 0 24px;

            border-top: 1px solid var(--border-color);
        }

        .libraryHeader {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 20px;

            h2 {
                margin-top: 3px;

                font-size: 1.3rem;
            }
        }

        .tabs {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }

        .tab {
            min-height: 34px;

            padding: 6px 10px;

            display: inline-flex;
            align-items: center;
            gap: 6px;

            border: 1px solid var(--border-color);
            border-radius: 9px;

            background: var(--surface-color);
            color: var(--text-muted-color);

            font-size: 0.59rem;
            font-weight: 700;

            cursor: pointer;

            transition:
                border-color 160ms ease,
                background 160ms ease,
                color 160ms ease,
                transform 160ms ease;

            svg {
                width: 13px;
                height: 13px;
            }

            strong {
                min-width: 18px;
                height: 18px;

                padding: 0 4px;

                display: grid;
                place-items: center;

                border-radius: 6px;

                background: var(--surface-soft-color);

                font-size: 0.5rem;
            }

            &:hover {
                box-shadow: 0 8px 22px var(--shadow-color);
                text-shadow: 0 0 12px var(--text-soft-color);
            }

            &.active {
                border-color: var(--text-color);

                background: var(--text-color);
                color: var(--background-color);

                strong {
                    background: color-mix(
                        in srgb,
                        var(--background-color) 16%,
                        transparent
                    );

                    color: inherit;
                }
            }
        }

        .libraryContent {
            margin-top: 10px;

            > section {
                border-radius: 14px;
            }
        }

        @media (max-width: 1180px) {
            .workspace {
                height: auto;
                min-height: 0;

                grid-template-columns:
                    minmax(0, 1fr)
                    minmax(300px, 0.82fr);
            }

            .stylesArea {
                grid-column: 1 / -1;

                height: 500px;
            }
        }

        @media (max-width: 900px) {
            .intro {
                align-items: flex-start;
                flex-direction: column;
                gap: 12px;
            }

            .introTitle {
                display: block;

                p {
                    margin-top: 6px;
                }
            }

            .stats {
                width: 100%;

                div {
                    flex: 1;
                }
            }

            .workspace {
                grid-template-columns: 1fr;
            }

            .stylesArea {
                grid-column: auto;
            }

            .libraryHeader {
                align-items: flex-start;
                flex-direction: column;
            }
        }

        @media (max-width: 640px) {
            .main {
                width: min(100% - 20px, 1460px);
            }

            .intro {
                padding: 12px 2px;
            }

            .stats {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
            }

            .tabs {
                width: 100%;
            }

            .tab {
                flex: 1;
                justify-content: center;
            }
        }

        @media (max-width: 470px) {
            .tabs {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
            }
        }
    `,
};
