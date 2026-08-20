import { FiHeart, FiMaximize2 } from "react-icons/fi";

import Loader from "../loader";

import { Styled } from "./styled";

const AvatarPreview = ({
    svg = "",
    seed = "",
    styleName = "",

    isFavorite = false,

    isLoading = false,
    error = "",

    onToggleFavorite,
}) => {
    return (
        <Styled.Wrapper>
            <div className="top">
                <div>
                    <span className="label">Live Preview</span>

                    <h2>Your Avatar</h2>
                </div>

                <div className="actions">
                    <button
                        type="button"
                        className={isFavorite ? "favorite active" : "favorite"}
                        onClick={onToggleFavorite}
                        disabled={isLoading || !svg}
                        title={
                            isFavorite
                                ? "Remove from favorites"
                                : "Add to favorites"
                        }
                        aria-label={
                            isFavorite
                                ? "Remove from favorites"
                                : "Add to favorites"
                        }
                    >
                        <FiHeart />
                    </button>
                </div>
            </div>

            <div className="preview">
                {isLoading ? (
                    <Loader />
                ) : error ? (
                    <div className="empty error">
                        <FiMaximize2 />

                        <strong>Avatar unavailable</strong>

                        <span>{error}</span>
                    </div>
                ) : svg ? (
                    <div
                        className="avatar"
                        dangerouslySetInnerHTML={{
                            __html: svg,
                        }}
                    />
                ) : (
                    <div className="empty">
                        <FiMaximize2 />

                        <strong>Avatar preview</strong>

                        <span>
                            Choose a style and browse its variants to generate
                            an avatar.
                        </span>
                    </div>
                )}
            </div>

            <div className="meta">
                <div>
                    <span>Style</span>

                    <strong>{styleName || "Not selected"}</strong>
                </div>

                <div>
                    <span>Seed</span>

                    <strong>{seed || "Not set"}</strong>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AvatarPreview;
