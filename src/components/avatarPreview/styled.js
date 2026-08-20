import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        min-width: 0;
        min-height: 0;

        padding: 12px;

        display: flex;
        flex-direction: column;

        overflow: hidden;

        border: 1px solid var(--border-color);
        border-radius: 13px;

        background: var(--surface-color);

        .top {
            flex: 0 0 auto;

            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;
        }

        .label {
            display: block;

            margin-bottom: 2px;

            color: var(--text-muted-color);

            font-size: 0.52rem;
            font-weight: 700;

            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        h2 {
            font-size: 1.05rem;
            line-height: 1.2;
        }

        .actions {
            display: flex;
            gap: 5px;

            button {
                width: 30px;
                height: 30px;

                display: grid;
                place-items: center;

                border: 1px solid var(--border-color);
                border-radius: 8px;

                background: var(--surface-soft-color);
                color: var(--text-muted-color);

                cursor: pointer;

                transition:
                    border-color 150ms ease,
                    background 150ms ease,
                    color 150ms ease,
                    transform 150ms ease;

                &:hover {
                    transform: translateY(-1px);

                    border-color: var(--border-strong-color);

                    background: var(--surface-strong-color);
                    color: var(--text-color);
                }

                svg {
                    width: 13px;
                    height: 13px;
                }
            }

            .favorite.active {
                color: var(--danger-color);

                svg {
                    fill: currentColor;
                }
            }
        }

        .preview {
            flex: 1 1 auto;
            min-height: 0;

            margin-top: 9px;

            display: grid;
            place-items: center;

            overflow: hidden;

            border: 1px solid var(--border-color);
            border-radius: 10px;

            background:
                linear-gradient(
                    45deg,
                    var(--surface-soft-color) 25%,
                    transparent 25%
                ),
                linear-gradient(
                    -45deg,
                    var(--surface-soft-color) 25%,
                    transparent 25%
                ),
                linear-gradient(
                    45deg,
                    transparent 75%,
                    var(--surface-soft-color) 75%
                ),
                linear-gradient(
                    -45deg,
                    transparent 75%,
                    var(--surface-soft-color) 75%
                );

            background-size: 18px 18px;

            background-position:
                0 0,
                0 9px,
                9px -9px,
                -9px 0;
        }

        .avatar {
            width: min(78%, 390px);
            aspect-ratio: 1;

            display: grid;
            place-items: center;

            > svg {
                width: 100%;
                height: 100%;
            }
        }

        .empty {
            max-width: 250px;

            display: grid;
            justify-items: center;
            gap: 6px;

            color: var(--text-muted-color);

            text-align: center;

            strong {
                color: var(--text-soft-color);

                font-size: 0.7rem;
            }

            span {
                font-size: 0.56rem;
            }
        }

        .meta {
            flex: 0 0 auto;

            margin-top: 7px;

            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 6px;

            div {
                min-width: 0;

                padding: 7px 8px;

                border: 1px solid var(--border-color);
                border-radius: 7px;

                background: var(--surface-soft-color);

                span,
                strong {
                    display: block;
                }

                span {
                    color: var(--text-muted-color);

                    font-size: 0.46rem;
                }

                strong {
                    margin-top: 1px;

                    overflow: hidden;

                    font-size: 0.57rem;

                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }

        @media (max-width: 1180px) {
            min-height: 540px;
        }

        @media (max-width: 900px) {
            min-height: 480px;
        }
    `,
};
