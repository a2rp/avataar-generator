import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        padding: 10px;

        border: 1px solid var(--border-color);
        border-radius: 11px;

        background: var(--surface-color);

        .heading {
            display: none;
        }

        .actions {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 5px;

            button {
                min-width: 0;
                min-height: 34px;

                padding: 6px 7px;

                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 5px;

                border: 1px solid var(--border-color);
                border-radius: 8px;

                background: var(--surface-soft-color);
                color: var(--text-soft-color);

                font-size: 0.53rem;
                font-weight: 700;

                cursor: pointer;

                transition:
                    box-shadow 150ms ease,
                    text-shadow 150ms ease;

                &:hover {
                    box-shadow: 0 8px 22px var(--shadow-color);
                    text-shadow: 0 0 12px var(--text-soft-color);
                }

                svg {
                    flex: 0 0 auto;

                    width: 12px;
                    height: 12px;
                }
            }
        }

        @media (max-width: 540px) {
            .actions {
                grid-template-columns: repeat(2, 1fr);

                button:last-child {
                    grid-column: 1 / -1;
                }
            }
        }
    `,
};
