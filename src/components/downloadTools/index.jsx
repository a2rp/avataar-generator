import { FiCode, FiCopy, FiDownload, FiImage, FiLink } from "react-icons/fi";

import { Styled } from "./styled";

const DownloadTools = ({
    onDownloadSvg,
    onDownloadPng,
    onCopySvg,
    onCopyDataUri,
    onCopyConfig,
}) => {
    return (
        <Styled.Wrapper>
            <div className="heading">
                <span className="label">Export</span>

                <h2>Download & Copy</h2>
            </div>

            <div className="actions">
                <button type="button" onClick={onDownloadPng}>
                    <FiImage />
                    PNG
                </button>

                <button type="button" onClick={onDownloadSvg}>
                    <FiDownload />
                    SVG
                </button>

                <button type="button" onClick={onCopySvg}>
                    <FiCode />
                    Copy SVG
                </button>

                <button type="button" onClick={onCopyDataUri}>
                    <FiLink />
                    Data URI
                </button>

                <button type="button" onClick={onCopyConfig}>
                    <FiCopy />
                    Copy Config
                </button>
            </div>
        </Styled.Wrapper>
    );
};

export default DownloadTools;
