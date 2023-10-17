import { useState } from "react";

import { LuMonitor } from 'react-icons/lu';

const ModalActions = () => {
    const [sizeValue, setSizeValue] = useState(50);
    const [lineHeightValue, setLineHeightValue] = useState(13);
    const [letterSpacingValue, setLetterSpacingValue] = useState(0);
    const [wordSpacingValue, setWordSpacingValue] = useState(0);

    const handleSizeSliderChange = (event) => {
        const newValue = event.target.value;
        setSizeValue(newValue);
    };
    const handleLineHeightSliderChange = (event) => {
        const newValue = event.target.value;
        setLineHeightValue(newValue);
    };
    const handleLetterSpacingSliderChange = (event) => {
        const newValue = event.target.value;
        setLetterSpacingValue(newValue);
    };
    const handleWordSpacingSliderChange = (event) => {
        const newValue = event.target.value;
        setWordSpacingValue(newValue);
    };

    return (
        <div>
            <form>
                <div className="spaceBetween">
                    <p>Family</p>
                    <select className='selectionDropdown' name="" id="">
                        <option value="">Roboto</option>
                        <option value="">Sans Serif</option>
                        <option value="">Arial Black</option>
                        <option value="">Calibri</option>
                    </select>
                </div>
                <div className="actionGap">
                    <div className="spaceBetween actionGap">
                        <div className="flex">
                            <p className="me-1">Size</p>
                            <LuMonitor />
                        </div>
                        <select className='w-10' name="" id="">
                            <option value="">px</option>
                            <option value="">rem</option>
                            <option value="">em</option>
                            <option value="">vh</option>
                        </select>
                    </div>
                    <div className="slidecontainer spaceBetween">
                        <input
                            type="range"
                            min="1"
                            max="100"
                            value={sizeValue}
                            onChange={handleSizeSliderChange}
                            className="slider"
                            id="myRange"
                        />
                        <p className="rangeValue">{sizeValue}</p>
                    </div>
                </div>
                <div className="spaceBetween">
                    <p>Weight</p>
                    <select className='selectionDropdown' name="" id="">
                        <option value="">600 (Semi Bold)</option>
                        <option value="">700 (Bold)</option>
                        <option value="">400 (Normal)</option>
                    </select>
                </div>
                <div className="spaceBetween actionGap">
                    <p>Transform</p>
                    <select className='selectionDropdown' name="" id="">
                        <option value="">Default</option>
                        <option value="">None</option>
                        <option value="">Inherit</option>
                    </select>
                </div>
                <div className="spaceBetween actionGap">
                    <p>Style</p>
                    <select className='selectionDropdown' name="" id="">
                        <option value="">Default</option>
                        <option value="">None</option>
                        <option value="">Inherit</option>
                    </select>
                </div>
                <div className="spaceBetween actionGap">
                    <p>Decoration</p>
                    <select className='selectionDropdown' name="" id="">
                        <option value="">Default</option>
                        <option value="">Rtl</option>
                        <option value="">Inherit</option>
                        <option value="">Unset</option>
                    </select>
                </div>
                <div className="actionGap">
                    <div className="spaceBetween actionGap">
                        <div className="flex">
                            <p className="me-1">Line-Height</p>
                            <LuMonitor />
                        </div>
                        <select className='w-10' name="" id="">
                            <option value="">px</option>
                            <option value="">rem</option>
                            <option value="">em</option>
                            <option value="">vh</option>
                        </select>
                    </div>
                    <div className="slidecontainer spaceBetween">
                        <input
                            type="range"
                            min="1"
                            max="100"
                            value={lineHeightValue}
                            onChange={handleLineHeightSliderChange}
                            className="slider"
                            id="myRange"
                        />
                        <p className="rangeValue">{lineHeightValue}</p>
                    </div>
                </div>
                <div className="actionGap">
                    <div className="spaceBetween actionGap">
                        <div className="flex">
                            <p className="me-1">Letter Spacing</p>
                            <LuMonitor />
                        </div>
                        <select className='w-10' name="" id="">
                            <option value="">px</option>
                            <option value="">rem</option>
                            <option value="">em</option>
                            <option value="">vh</option>
                        </select>
                    </div>
                    <div className="slidecontainer spaceBetween">
                        <input
                            type="range"
                            min="1"
                            max="100"
                            value={letterSpacingValue}
                            onChange={handleLetterSpacingSliderChange}
                            className="slider"
                            id="myRange"
                        />
                        <p className="rangeValue">{letterSpacingValue}</p>
                    </div>
                </div>
                <div className="actionGap">
                    <div className="spaceBetween actionGap">
                        <div className="flex">
                            <p className="me-1">Word Spacing</p>
                            <LuMonitor />
                        </div>
                        <select className='w-10' name="" id="">
                            <option value="">px</option>
                            <option value="">rem</option>
                            <option value="">em</option>
                            <option value="">vh</option>
                        </select>
                    </div>
                    <div className="slidecontainer spaceBetween">
                        <input
                            type="range"
                            min="1"
                            max="100"
                            value={wordSpacingValue}
                            onChange={handleWordSpacingSliderChange}
                            className="slider"
                            id="myRange"
                        />
                        <p className="rangeValue">{wordSpacingValue}</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ModalActions;
