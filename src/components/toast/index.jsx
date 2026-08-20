import { FiCheckCircle, FiInfo, FiAlertCircle, FiX } from "react-icons/fi";

import { Styled } from "./styled";

const Toast = ({ visible, type = "info", message, onClose }) => {
    if (!visible) {
        return null;
    }

    const Icon =
        type === "success"
            ? FiCheckCircle
            : type === "error"
              ? FiAlertCircle
              : FiInfo;

    return (
        <Styled.Wrapper className={type}>
            <Icon className="statusIcon" />

            <span>{message}</span>

            <button
                type="button"
                onClick={onClose}
                aria-label="Close notification"
            >
                <FiX />
            </button>
        </Styled.Wrapper>
    );
};

export default Toast;
