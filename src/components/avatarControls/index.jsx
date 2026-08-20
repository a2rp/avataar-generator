import { FiRotateCw, FiRefreshCw } from "react-icons/fi";

import { Styled } from "./styled";

const AvatarControls = ({ controls, onChange, onReset }) => {
    return (
        <Styled.Wrapper>
            <div className="heading">
                <div>
                    <span className="label">Customize</span>

                    <h2>Avatar Controls</h2>
                </div>

                <button type="button" className="resetButton" onClick={onReset}>
                    <FiRefreshCw />
                    Reset
                </button>
            </div>

            <div className="controls">
                <label className="control">
                    <div className="controlHeader">
                        <span>Scale</span>
                        <strong>{controls.scale}%</strong>
                    </div>

                    <input
                        type="range"
                        min="50"
                        max="200"
                        step="1"
                        value={controls.scale}
                        onChange={(event) =>
                            onChange("scale", Number(event.target.value))
                        }
                    />
                </label>

                <label className="control">
                    <div className="controlHeader">
                        <span>Rotation</span>
                        <strong>{controls.rotate}°</strong>
                    </div>

                    <input
                        type="range"
                        min="-180"
                        max="180"
                        step="1"
                        value={controls.rotate}
                        onChange={(event) =>
                            onChange("rotate", Number(event.target.value))
                        }
                    />
                </label>

                <label className="control">
                    <div className="controlHeader">
                        <span>Radius</span>
                        <strong>{controls.radius}%</strong>
                    </div>

                    <input
                        type="range"
                        min="0"
                        max="50"
                        step="1"
                        value={controls.radius}
                        onChange={(event) =>
                            onChange("radius", Number(event.target.value))
                        }
                    />
                </label>

                <label className="control">
                    <div className="controlHeader">
                        <span>Margin</span>
                        <strong>{controls.margin}</strong>
                    </div>

                    <input
                        type="range"
                        min="0"
                        max="30"
                        step="1"
                        value={controls.margin}
                        onChange={(event) =>
                            onChange("margin", Number(event.target.value))
                        }
                    />
                </label>

                <div className="toggles">
                    <label>
                        <input
                            type="checkbox"
                            checked={controls.flip}
                            onChange={(event) =>
                                onChange("flip", event.target.checked)
                            }
                        />

                        <span>Flip</span>
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            checked={controls.backgroundTransparent}
                            onChange={(event) =>
                                onChange(
                                    "backgroundTransparent",
                                    event.target.checked,
                                )
                            }
                        />

                        <span>Transparent background</span>
                    </label>
                </div>

                <label className="colorControl">
                    <span>Background Color</span>

                    <div>
                        <input
                            type="color"
                            value={controls.backgroundColor}
                            onChange={(event) => {
                                onChange("backgroundColor", event.target.value);

                                onChange("backgroundTransparent", false);
                            }}
                            title="Choose background color"
                            aria-label="Choose avatar background color"
                        />

                        <strong>{controls.backgroundColor}</strong>
                    </div>
                </label>

                <div className="rotationInfo">
                    <FiRotateCw />

                    <span>Adjustments update the preview instantly.</span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AvatarControls;
