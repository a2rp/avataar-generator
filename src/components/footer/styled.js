import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        margin-top: 80px;

        border-top: 1px solid var(--border-color);

        background: var(--surface-color);

        .inner {
            width: min(1400px, calc(100% - 40px));

            margin: 0 auto;
            padding: 28px 0;

            display: grid;
            grid-template-columns:
                minmax(200px, 1fr)
                auto
                auto;
            align-items: start;
            gap: 30px;
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 11px;

            .logo {
                width: 38px;
                height: 38px;

                display: grid;
                place-items: center;

                border: 1px solid var(--border-color);
                border-radius: 10px;

                background: var(--surface-soft-color);

                font-size: 0.7rem;
                font-weight: 800;
            }

            strong,
            span {
                display: block;
            }

            strong {
                font-size: 0.72rem;
            }

            span {
                margin-top: 2px;

                color: var(--text-muted-color);

                font-size: 0.56rem;
            }
        }

        .links,
        .support {
            display: flex;
            flex-wrap: wrap;
            gap: 10px 14px;

            a {
                display: inline-flex;
                align-items: center;
                gap: 5px;

                color: var(--text-muted-color);

                font-size: 0.58rem;

                &:hover {
                    color: var(--text-color);
                }

                svg {
                    width: 12px;
                    height: 12px;
                }
            }
        }

        .support {
            max-width: 180px;
        }

        .bottom {
            width: min(1400px, calc(100% - 40px));

            margin: 0 auto;
            padding: 14px 0 18px;

            display: flex;
            justify-content: space-between;
            gap: 20px;

            border-top: 1px solid var(--border-color);

            color: var(--text-muted-color);

            font-size: 0.54rem;

            a {
                color: var(--text-soft-color);

                font-weight: 700;
            }
        }

        @media (max-width: 900px) {
            .inner {
                grid-template-columns: 1fr;
            }

            .support {
                max-width: none;
            }
        }

        @media (max-width: 640px) {
            .inner,
            .bottom {
                width: min(100% - 24px, 1400px);
            }

            .bottom {
                flex-direction: column;

                gap: 5px;
            }
        }
    `,
};
