import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        height: 100%;
        min-height: 0;

        padding: 12px;

        display: flex;
        flex-direction: column;

        overflow: hidden;

        border: 1px solid var(--border-color);
        border-radius: 13px;

        background: var(--surface-color);

        .heading {
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

        .count {
            min-width: 27px;
            height: 27px;

            padding: 0 6px;

            display: grid;
            place-items: center;

            border: 1px solid var(--border-color);
            border-radius: 7px;

            background: var(--surface-soft-color);

            color: var(--text-muted-color);

            font-size: 0.56rem;
            font-weight: 700;
        }

        .search {
            position: relative;

            flex: 0 0 auto;

            margin-top: 8px;

            > svg {
                position: absolute;
                top: 50%;
                left: 10px;

                width: 12px;
                height: 12px;

                transform: translateY(-50%);

                color: var(--text-muted-color);

                pointer-events: none;
            }

            input {
                width: 100%;
                height: 34px;

                padding: 0 10px 0 30px;

                border-radius: 8px;

                font-size: 0.61rem;
            }
        }

        .grid {
            flex: 1 1 auto;
            min-height: 0;

            margin-top: 8px;
            padding-right: 3px;
            padding-bottom: 2px;

            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));

            grid-auto-rows: max-content;
            align-content: start;
            gap: 6px;

            overflow-x: hidden;
            overflow-y: auto;

            overscroll-behavior: contain;
        }

        .styleCard {
            min-width: 0;

            padding: 5px;

            overflow: visible;

            border: 1px solid var(--border-color);
            border-radius: 9px;

            background: var(--surface-soft-color);

            cursor: pointer;

            transition:
                transform 150ms ease,
                background 150ms ease,
                border-color 150ms ease,
                box-shadow 150ms ease;

            &:hover {
                transform: translateY(-1px);

                border-color: var(--border-strong-color);

                background: var(--surface-strong-color);
            }

            &.active {
                border-color: var(--text-color);

                box-shadow: 0 0 0 1px var(--text-color);
            }

            strong {
                display: block;

                margin-top: 4px;

                overflow: hidden;

                color: var(--text-soft-color);

                font-size: 0.48rem;
                line-height: 1.2;

                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }

        .thumbnail {
            position: relative;

            width: 100%;
            aspect-ratio: 1;

            padding: 8px;

            display: grid;
            place-items: center;

            overflow: hidden;

            border-radius: 6px;

            background: var(--background-color);

            img {
                width: 100%;
                height: 100%;

                display: block;

                object-fit: contain;

                user-select: none;

                pointer-events: none;
            }

            .fallback {
                font-size: 1rem;
                font-weight: 800;
            }
        }

        .check {
            position: absolute;
            top: 4px;
            right: 4px;

            width: 17px;
            height: 17px;

            display: grid;
            place-items: center;

            border-radius: 50%;

            background: var(--text-color);

            color: var(--background-color);

            svg {
                width: 9px;
                height: 9px;
            }
        }

        .empty {
            margin-top: 8px;
            padding: 20px 8px;

            color: var(--text-muted-color);

            text-align: center;

            font-size: 0.6rem;
        }

        @media (max-width: 1180px) {
            .grid {
                grid-template-columns: repeat(auto-fill, minmax(82px, 1fr));
            }
        }

        @media (max-width: 640px) {
            .grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    `,
};
