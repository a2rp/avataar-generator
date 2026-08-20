import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        position: fixed;
        inset: 0;
        z-index: 250;

        padding: 16px;

        display: grid;
        place-items: center;

        background: rgba(0, 0, 0, 0.72);

        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);

        .modal {
            position: relative;

            width: min(420px, 100%);

            padding: 24px;

            border: 1px solid var(--border-color);
            border-radius: 18px;

            background: var(--surface-color);

            box-shadow: 0 30px 90px rgba(0, 0, 0, 0.4);
        }

        .close {
            position: absolute;
            top: 12px;
            right: 12px;

            width: 34px;
            height: 34px;

            display: grid;
            place-items: center;

            border: 1px solid var(--border-color);
            border-radius: 9px;

            background: var(--surface-soft-color);

            cursor: pointer;
        }

        .icon {
            width: 46px;
            height: 46px;

            display: grid;
            place-items: center;

            border: 1px solid var(--border-color);
            border-radius: 13px;

            background: var(--surface-soft-color);

            color: var(--warning-color);

            svg {
                width: 20px;
                height: 20px;
            }
        }

        h2 {
            margin-top: 17px;

            font-size: 1.4rem;
        }

        p {
            margin-top: 7px;

            color: var(--text-muted-color);

            font-size: 0.67rem;
            line-height: 1.65;
        }

        .actions {
            margin-top: 20px;

            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;

            button {
                min-height: 40px;

                border: 1px solid var(--border-color);
                border-radius: 10px;

                font-size: 0.66rem;
                font-weight: 700;

                cursor: pointer;
            }
        }

        .cancel {
            background: var(--surface-soft-color);
        }

        .confirm {
            background: var(--text-color);
            color: var(--background-color);
        }

        &.danger {
            .icon {
                color: var(--danger-color);

                background: var(--danger-soft-color);
            }

            .confirm {
                border-color: var(--danger-color);

                background: var(--danger-color);
                color: #ffffff;
            }
        }

        @media (max-width: 480px) {
            .actions {
                grid-template-columns: 1fr;
            }
        }
    `,
};
