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
            gap: 16px;
        }

        .label {
            color: var(--text-muted-color);

            font-size: 0.56rem;
            font-weight: 700;

            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        h2 {
            margin-top: 4px;

            font-size: 1.2rem;
        }

        .clearButton {
            min-height: 30px;

            padding: 5px 9px;

            border: 1px solid var(--border-color);
            border-radius: 8px;

            background: var(--surface-soft-color);
            color: var(--danger-color);

            font-size: 0.56rem;
            font-weight: 700;

            cursor: pointer;

            &:hover {
                box-shadow: 0 8px 22px var(--shadow-color);
                text-shadow: 0 0 12px var(--danger-color);
            }
        }

        .empty {
            min-height: 170px;

            display: grid;
            place-items: center;
            align-content: center;
            gap: 7px;

            color: var(--text-muted-color);

            text-align: center;

            svg {
                width: 22px;
                height: 22px;
            }

            strong {
                color: var(--text-soft-color);

                font-size: 0.7rem;
            }

            span {
                font-size: 0.58rem;
            }
        }

        .grid {
            margin-top: 14px;

            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
            gap: 8px;
        }

        .item {
            position: relative;

            min-width: 0;

            padding: 7px;

            border: 1px solid var(--border-color);
            border-radius: 11px;

            background: var(--surface-soft-color);

            transition:
                box-shadow 150ms ease,
                text-shadow 150ms ease;

            &:hover {
                box-shadow: 0 8px 22px var(--shadow-color);
                text-shadow: 0 0 12px var(--text-soft-color);
            }
        }

        .avatarButton {
            width: 100%;

            text-align: left;

            cursor: pointer;
        }

        .avatar {
            width: 100%;
            aspect-ratio: 1;

            padding: 8px;

            display: grid;
            place-items: center;

            overflow: hidden;

            border-radius: 8px;

            background: var(--background-color);

            img {
                width: 100%;
                height: 100%;

                display: block;

                object-fit: contain;

                pointer-events: none;
                user-select: none;
            }
        }

        .info {
            min-width: 0;

            margin-top: 6px;

            strong,
            span {
                display: block;

                overflow: hidden;

                text-overflow: ellipsis;
                white-space: nowrap;
            }

            strong {
                font-size: 0.57rem;
            }

            span {
                margin-top: 2px;

                color: var(--text-muted-color);

                font-size: 0.5rem;
            }
        }

        .deleteButton {
            position: absolute;
            top: 12px;
            right: 12px;

            width: 28px;
            height: 28px;

            display: grid;
            place-items: center;

            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 7px;

            background: rgba(0, 0, 0, 0.72);
            color: #ffffff;

            cursor: pointer;

            transition:
                box-shadow 150ms ease,
                text-shadow 150ms ease;

            &:hover {
                box-shadow: 0 8px 22px var(--shadow-color);
                text-shadow: 0 0 12px #ffffff;
            }

            svg {
                width: 12px;
                height: 12px;
            }
        }

        @media (max-width: 640px) {
            .grid {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }
        }

        @media (max-width: 380px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `,
};
