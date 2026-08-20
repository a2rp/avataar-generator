import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        padding: 20px;

        border: 1px solid var(--border-color);
        border-radius: 18px;

        background: var(--surface-color);

        .heading {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 16px;
        }

        .label {
            display: block;

            margin-bottom: 5px;

            color: var(--text-muted-color);

            font-size: 0.62rem;
            font-weight: 700;

            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        h2 {
            font-size: 1.3rem;
        }

        .resetButton {
            min-height: 34px;

            padding: 6px 9px;

            display: inline-flex;
            align-items: center;
            gap: 6px;

            border: 1px solid var(--border-color);
            border-radius: 9px;

            background: var(--surface-soft-color);
            color: var(--text-muted-color);

            font-size: 0.62rem;
            font-weight: 700;

            cursor: pointer;

            svg {
                width: 13px;
                height: 13px;
            }

            &:hover {
                border-color: var(--border-strong-color);

                color: var(--text-color);
            }
        }

        .controls {
            margin-top: 18px;

            display: grid;
            gap: 18px;
        }

        .control {
            display: grid;
            gap: 8px;
        }

        .controlHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;

            span {
                color: var(--text-soft-color);

                font-size: 0.68rem;
                font-weight: 700;
            }

            strong {
                color: var(--text-muted-color);

                font-size: 0.62rem;
            }
        }

        input[type="range"] {
            width: 100%;
        }

        .toggles {
            display: grid;
            gap: 9px;

            label {
                display: flex;
                align-items: center;
                gap: 8px;

                color: var(--text-soft-color);

                font-size: 0.66rem;

                cursor: pointer;
            }
        }

        .colorControl {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            > span {
                color: var(--text-soft-color);

                font-size: 0.68rem;
                font-weight: 700;
            }

            > div {
                display: flex;
                align-items: center;
                gap: 8px;

                strong {
                    color: var(--text-muted-color);

                    font-size: 0.58rem;
                    font-family: Consolas, monospace;
                }
            }

            input[type="color"] {
                width: 34px;
                height: 30px;

                padding: 2px;

                border-radius: 7px;
            }
        }

        .rotationInfo {
            padding: 10px;

            display: flex;
            align-items: center;
            gap: 8px;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            background: var(--surface-soft-color);

            color: var(--text-muted-color);

            font-size: 0.6rem;

            svg {
                flex: 0 0 auto;

                width: 13px;
                height: 13px;
            }
        }
    `,
};
