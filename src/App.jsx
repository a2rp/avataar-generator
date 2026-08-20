import { useEffect, useState } from "react";

import Header from "./components/header";
import AvatarPreview from "./components/avatarPreview";
import StyleSelector from "./components/styleSelector";
import AvatarControls from "./components/avatarControls";
import SeedControls from "./components/seedControls";
import DownloadTools from "./components/downloadTools";
import Favorites from "./components/favorites";
import Toast from "./components/toast";
import ConfirmModal from "./components/confirmModal";
import GoToTop from "./components/goToTop";
import Footer from "./components/footer";

import useAvatar from "./hooks/useAvatar";
import useTheme from "./hooks/useTheme";

import { EXPORT_SIZE, TOAST_DURATION } from "./data/constants";

import { getSafeFilename, svgToDataUri } from "./utils/avatarUtils";

import { copyJson, copyText } from "./utils/clipboard";

import { downloadPng, downloadSvg } from "./utils/download";

import { Styled } from "./App.styled";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    const {
        seed,
        setSeed,

        selectedStyleId,
        selectedStyle,

        controls,

        svg,

        isAvatarLoading,
        avatarError,

        styles,

        favorites,
        isFavorite,

        canGoPrevious,

        setSelectedStyleId,

        updateControl,
        resetControls,

        previousVariant,
        nextVariant,

        loadAvatar,

        toggleFavorite,

        removeFavorite,
        clearFavorites,
    } = useAvatar();

    const [toast, setToast] = useState({
        visible: false,
        message: "",
        type: "info",
    });

    const [confirmation, setConfirmation] = useState(null);

    useEffect(() => {
        if (!toast.visible) {
            return undefined;
        }

        const timeoutId = window.setTimeout(() => {
            setToast((current) => ({
                ...current,

                visible: false,
            }));
        }, TOAST_DURATION);

        return () => {
            window.clearTimeout(timeoutId);
        };
    }, [toast]);

    useEffect(() => {
        if (!confirmation) {
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setConfirmation(null);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);

            document.body.style.overflow = "";
        };
    }, [confirmation]);

    const showToast = (message, type = "info") => {
        setToast({
            visible: true,
            message,
            type,
        });
    };

    const handlePreviousVariant = () => {
        if (!canGoPrevious) {
            return;
        }

        previousVariant();
    };

    const handleNextVariant = () => {
        nextVariant();
    };

    const handleToggleFavorite = () => {
        const added = toggleFavorite();

        if (added === null) {
            showToast("Please wait for the avatar to finish loading.", "info");

            return;
        }

        showToast(
            added
                ? "Avatar added to favorites."
                : "Avatar removed from favorites.",
            "success",
        );
    };

    const handleFavoriteSelect = (avatar) => {
        loadAvatar(avatar);

        showToast("Favorite avatar loaded.", "success");

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleClearFavorites = () => {
        if (!favorites.length) {
            return;
        }

        setConfirmation({
            type: "clearFavorites",

            title: "Clear Favorites?",

            message:
                "All saved favorite avatars will be removed from this browser.",

            confirmText: "Clear Favorites",

            cancelText: "Keep Favorites",

            danger: true,
        });
    };

    const handleDeleteFavorite = (avatar) => {
        setConfirmation({
            type: "deleteFavorite",

            avatarId: avatar.id,

            title: "Delete Favorite?",

            message: `Remove "${avatar.seed}" from your saved favorites?`,

            confirmText: "Delete Favorite",

            cancelText: "Keep Favorite",

            danger: true,
        });
    };

    const handleDownloadSvg = () => {
        if (isAvatarLoading || !svg) {
            showToast("Please wait for the avatar to finish loading.", "info");

            return;
        }

        const filename = `${getSafeFilename(seed)}-${selectedStyleId}.svg`;

        const success = downloadSvg(svg, filename);

        if (!success) {
            showToast("Unable to download SVG.", "error");

            return;
        }

        showToast("SVG downloaded.", "success");
    };

    const handleDownloadPng = async () => {
        if (isAvatarLoading || !svg) {
            showToast("Please wait for the avatar to finish loading.", "info");

            return;
        }

        try {
            const filename = `${getSafeFilename(seed)}-${selectedStyleId}.png`;

            await downloadPng(svg, filename, EXPORT_SIZE);

            showToast("PNG downloaded.", "success");
        } catch {
            showToast("Unable to create PNG.", "error");
        }
    };

    const handleCopySvg = async () => {
        if (isAvatarLoading || !svg) {
            showToast("Please wait for the avatar to finish loading.", "info");

            return;
        }

        const copied = await copyText(svg);

        showToast(
            copied ? "SVG copied." : "Unable to copy SVG.",
            copied ? "success" : "error",
        );
    };

    const handleCopyDataUri = async () => {
        if (isAvatarLoading || !svg) {
            showToast("Please wait for the avatar to finish loading.", "info");

            return;
        }

        const copied = await copyText(svgToDataUri(svg));

        showToast(
            copied ? "Data URI copied." : "Unable to copy Data URI.",
            copied ? "success" : "error",
        );
    };

    const handleCopyConfig = async () => {
        const copied = await copyJson({
            seed,

            style: selectedStyleId,

            controls,
        });

        showToast(
            copied ? "Configuration copied." : "Unable to copy configuration.",
            copied ? "success" : "error",
        );
    };

    const handleConfirmAction = () => {
        if (!confirmation) {
            return;
        }

        if (confirmation.type === "clearFavorites") {
            clearFavorites();

            showToast("Favorites cleared.", "success");
        }

        if (confirmation.type === "deleteFavorite") {
            removeFavorite(confirmation.avatarId);

            showToast("Favorite removed.", "success");
        }

        setConfirmation(null);
    };

    return (
        <Styled.Wrapper>
            <Header theme={theme} onToggleTheme={toggleTheme} />

            <main className="main">
                <section className="intro">
                    <div className="introText">
                        <span className="label">Avatar Studio</span>

                        <div className="introTitle">
                            <h2>Design your avatar.</h2>

                            <p>
                                Generate, customize, save, and export DiceBear
                                avatars from one compact workspace.
                            </p>
                        </div>
                    </div>

                    <div className="stats">
                        <div>
                            <strong>{styles.length}</strong>

                            <span>Styles</span>
                        </div>

                        <div>
                            <strong>{favorites.length}</strong>

                            <span>Favorites</span>
                        </div>
                    </div>
                </section>

                <section className="workspace">
                    <div className="previewArea">
                        <AvatarPreview
                            svg={svg}
                            seed={seed}
                            styleName={selectedStyle.name}
                            isFavorite={isFavorite}
                            isLoading={isAvatarLoading}
                            error={avatarError}
                            onToggleFavorite={handleToggleFavorite}
                        />

                        <DownloadTools
                            onDownloadSvg={handleDownloadSvg}
                            onDownloadPng={handleDownloadPng}
                            onCopySvg={handleCopySvg}
                            onCopyDataUri={handleCopyDataUri}
                            onCopyConfig={handleCopyConfig}
                        />
                    </div>

                    <div className="settingsArea">
                        <SeedControls
                            seed={seed}
                            canGoPrevious={canGoPrevious}
                            onChange={setSeed}
                            onPrevious={handlePreviousVariant}
                            onNext={handleNextVariant}
                        />

                        <AvatarControls
                            controls={controls}
                            onChange={updateControl}
                            onReset={() => {
                                resetControls();

                                showToast("Controls reset.", "info");
                            }}
                        />
                    </div>

                    <div className="stylesArea">
                        <StyleSelector
                            styles={styles}
                            selectedStyle={selectedStyleId}
                            onSelect={setSelectedStyleId}
                        />
                    </div>
                </section>

                <section className="library">
                    <div className="libraryHeader">
                        <div>
                            <span className="label">Saved</span>

                            <h2>Favorites</h2>
                        </div>

                        <span className="libraryCount">{favorites.length}</span>
                    </div>

                    <div className="libraryContent">
                        <Favorites
                            favorites={favorites}
                            onSelect={handleFavoriteSelect}
                            onRemove={handleDeleteFavorite}
                            onClear={handleClearFavorites}
                        />
                    </div>
                </section>
            </main>

            <Footer />

            <GoToTop />

            <Toast
                visible={toast.visible}
                message={toast.message}
                type={toast.type}
                onClose={() =>
                    setToast((current) => ({
                        ...current,

                        visible: false,
                    }))
                }
            />

            <ConfirmModal
                isOpen={Boolean(confirmation)}
                title={confirmation?.title}
                message={confirmation?.message}
                confirmText={confirmation?.confirmText}
                cancelText={confirmation?.cancelText}
                danger={confirmation?.danger}
                onConfirm={handleConfirmAction}
                onClose={() => setConfirmation(null)}
            />
        </Styled.Wrapper>
    );
};

export default App;
