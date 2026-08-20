import { FiAlertTriangle, FiX } from "react-icons/fi";

import { Styled } from "./styled";

const ConfirmModal = ({
    isOpen,
    title = "Are you sure?",
    message = "",
    confirmText = "Confirm",
    cancelText = "Cancel",
    danger = false,
    onConfirm,
    onClose,
}) => {
    if (!isOpen) {
        return null;
    }

    const handleBackdrop = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <Styled.Wrapper
            className={danger ? "danger" : ""}
            onMouseDown={handleBackdrop}
            role="dialog"
            aria-modal="true"
        >
            <div
                className="modal"
                onMouseDown={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="close"
                    onClick={onClose}
                    aria-label="Close confirmation"
                >
                    <FiX />
                </button>

                <div className="icon">
                    <FiAlertTriangle />
                </div>

                <h2>{title}</h2>

                <p>{message}</p>

                <div className="actions">
                    <button type="button" className="cancel" onClick={onClose}>
                        {cancelText}
                    </button>

                    <button
                        type="button"
                        className="confirm"
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ConfirmModal;
