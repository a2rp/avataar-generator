import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { createAvatar } from "@dicebear/core";
import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, Tooltip } from "@mui/material";
import parse from "html-react-parser";
import avataarStyle from "./avataarStyles";
import { FaCopy } from "react-icons/fa";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

const RandomAvataars = () => {
    // console.log(avataarStyle, "avataarStyle");
    const [svg, setSvg] = useState("");
    const [selectedAvataarStyle, setSelectedAvataarStyle] = useState(avataarStyle[0].style);
    const [seed, setSeed] = useState(0);

    useEffect(() => {
        // console.log(selectedAvataarStyle, "selectedAvataarStyle");
        if (selectedAvataarStyle.toString().length !== 0) {
            nextAvataar();
        }
    }, [selectedAvataarStyle]);

    const nextAvataar = async () => {
        const seedValue = Math.floor(Math.random() * 10000);
        setSeed(seed => seedValue);
        const avatar = createAvatar(selectedAvataarStyle, {
            seed: seedValue,
        });

        const value = avatar.toString();
        // console.log(value, "value");
        setSvg(value);
    };

    const downloadAvataar = async () => {
        const avatar = createAvatar(selectedAvataarStyle, { seed });
        const pngValue = await avatar.png();
        pngValue.toFile("avatar.png");
    };

    const handleCopyIconClick = () => {
        copy(svg);
        toast.info("Copied SVG");
    };

    return (
        <div className={styles.container}>
            <div className={styles.heading}>Random Avataars</div>
            <div className={styles.imageContainer}>
                <Tooltip className={styles.copyIcon} title="Copy SVG">
                    <IconButton onClick={handleCopyIconClick}>
                        <FaCopy />
                    </IconButton>
                </Tooltip>
                {parse(svg)}
            </div>

            <FormControl fullWidth className={styles.stylesContainer}>
                <InputLabel id="avataar-style-select-label">Avataar Styles</InputLabel>
                <Select
                    defaultValue=""
                    labelId="avataar-style-select-label"
                    id="avataar-style-select"
                    value={selectedAvataarStyle}
                    label="Avataar style"
                    onChange={event => {
                        setSelectedAvataarStyle(selectedAvataarStyle => event.target.value);
                    }}
                >
                    {avataarStyle.map((item, index) => (
                        <MenuItem
                            key={item.id}
                            value={item.style}
                        >{item.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <div className={styles.buttonsContainer}>
                <Button
                    variant="contained"
                    onClick={nextAvataar}
                    fullWidth
                >Next</Button>
                <Button
                    variant="contained"
                    onClick={downloadAvataar}
                    fullWidth
                >Download</Button>
            </div>
        </div>
    )
}

export default RandomAvataars

