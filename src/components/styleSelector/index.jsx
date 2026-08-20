import { useMemo, useState } from "react";

import { FiCheck, FiSearch } from "react-icons/fi";

import { Styled } from "./styled";

const StyleSelector = ({ styles = [], selectedStyle = "", onSelect }) => {
    const [search, setSearch] = useState("");

    const filteredStyles = useMemo(() => {
        const query = search.trim().toLowerCase();

        if (!query) {
            return styles;
        }

        return styles.filter((style) =>
            style.name.toLowerCase().includes(query),
        );
    }, [search, styles]);

    return (
        <Styled.Wrapper>
            <div className="heading">
                <div>
                    <span className="label">Avatar Styles</span>

                    <h2>Choose a Style</h2>
                </div>

                <span className="count">{filteredStyles.length}</span>
            </div>

            <div className="search">
                <FiSearch />

                <input
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search styles"
                    aria-label="Search avatar styles"
                />
            </div>

            <div className="grid">
                {filteredStyles.map((style) => {
                    const active = selectedStyle === style.id;

                    return (
                        <button
                            type="button"
                            key={style.id}
                            className={
                                active ? "styleCard active" : "styleCard"
                            }
                            onClick={() => onSelect(style.id)}
                        >
                            <div className="thumbnail">
                                <img
                                    src={style.previewUrl}
                                    alt={`${style.name} avatar style`}
                                    loading="lazy"
                                    draggable="false"
                                />

                                {active && (
                                    <span className="check">
                                        <FiCheck />
                                    </span>
                                )}
                            </div>

                            <strong>{style.name}</strong>
                        </button>
                    );
                })}
            </div>

            {!filteredStyles.length && (
                <div className="empty">No matching avatar styles.</div>
            )}
        </Styled.Wrapper>
    );
};

export default StyleSelector;
