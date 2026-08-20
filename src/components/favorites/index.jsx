import { FiHeart, FiTrash2 } from "react-icons/fi";

import { svgToDataUri } from "../../utils/avatarUtils";

import { Styled } from "./styled";

const Favorites = ({ favorites = [], onSelect, onRemove, onClear }) => {
    return (
        <Styled.Wrapper>
            <div className="heading">
                <div>
                    <span className="label">Saved</span>

                    <h2>Favorite Avatars</h2>
                </div>

                {!!favorites.length && (
                    <button
                        type="button"
                        className="clearButton"
                        onClick={onClear}
                    >
                        Clear All
                    </button>
                )}
            </div>

            {!favorites.length ? (
                <div className="empty">
                    <FiHeart />

                    <strong>No favorites yet</strong>

                    <span>
                        Save an avatar using the heart button in the preview.
                    </span>
                </div>
            ) : (
                <div className="grid">
                    {favorites.map((avatar) => (
                        <div className="item" key={avatar.id}>
                            <button
                                type="button"
                                className="avatarButton"
                                onClick={() => onSelect(avatar)}
                                title={`Load ${avatar.seed}`}
                            >
                                <div className="avatar">
                                    <img
                                        src={svgToDataUri(avatar.svg)}
                                        alt={`${avatar.styleName} avatar`}
                                        draggable="false"
                                    />
                                </div>

                                <div className="info">
                                    <strong>{avatar.seed}</strong>

                                    <span>{avatar.styleName}</span>
                                </div>
                            </button>

                            <button
                                type="button"
                                className="deleteButton"
                                onClick={() => onRemove(avatar)}
                                title="Delete favorite"
                                aria-label={`Delete ${avatar.seed} from favorites`}
                            >
                                <FiTrash2 />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </Styled.Wrapper>
    );
};

export default Favorites;
