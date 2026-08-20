import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        padding: 16px;

        border: 1px solid var(--border-color);

        border-radius: 14px;

        background: var(--surface-color);

        .heading {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
        }

        .label {
            display: block;

            margin-bottom: 4px;

            color: var(--text-muted-color);

            font-size: 0.54rem;
            font-weight: 700;

            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        h2 {
            font-size: 1.15rem;
            line-height: 1.2;
        }

        .info {
            margin-top: 8px;

            color: var(--text-muted-color);

            font-size: 0.58rem;
            line-height: 1.6;
        }

        .seedField {
            position: relative;

            margin-top: 12px;

            > svg {
                position: absolute;
                top: 50%;
                left: 12px;

                width: 14px;
                height: 14px;

                transform: translateY(-50%);

                color: var(--text-muted-color);

                pointer-events: none;
            }

            input {
                width: 100%;
                height: 40px;

                padding: 0 12px 0 36px;

                border-radius: 9px;

                font-size: 0.72rem;
                font-weight: 700;
            }
        }

        .navigation {
            margin-top: 9px;

            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 7px;

            button {
                min-height: 34px;

                padding: 6px 10px;

                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 5px;

                border: 1px solid var(--border-color);

                border-radius: 8px;

                background: var(--surface-soft-color);

                color: var(--text-soft-color);

                font-size: 0.56rem;
                font-weight: 700;

                cursor: pointer;

                transition:
                    transform 150ms ease,
                    border-color 150ms ease,
                    background 150ms ease,
                    color 150ms ease;

                &:not(:disabled):hover {
                    transform: translateY(-1px);

                    border-color: var(--border-strong-color);

                    background: var(--surface-strong-color);

                    color: var(--text-color);
                }

                &:disabled {
                    cursor: not-allowed;

                    opacity: 0.35;
                }

                svg {
                    width: 13px;
                    height: 13px;
                }
            }
        }
    `,
};
