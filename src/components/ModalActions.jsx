
import { LuMonitor } from 'react-icons/lu';

const ModalActions = ({ formData, setFormData }) => {
    // Typography Actions State Console
    console.log(formData);
    // Function for taking value from onchange event and set value to the state
    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'range' ? parseInt(value, 10) : value,
        });
    }

    return (
        <div>
            <form>
                {/* Font family */}
                <div className="spaceBetween">
                    <p>Family</p>
                    <select
                        name="fontFamily"
                        defaultValue={formData?.fontFamily}
                        onChange={handleChange}
                        className='selectionDropdown selectIconStyled' id="">
                        <option value="">Roboto</option>
                        <option value="Sans Serif">Sans Serif</option>
                        <option value="Arial Black">Arial Black</option>
                        <option value="Calibri">Calibri</option>
                    </select>
                </div>
                {/* Font size */}
                <div className="actionGap">
                    <div className="spaceBetween actionGap">
                        <div className="flex">
                            <p className="me-1">Size</p>
                            <LuMonitor />
                        </div>
                        {/* Font size utility */}
                        <select
                            name="fontSizeValueUnit"
                            defaultValue={formData?.fontSizeValueUnit}
                            onChange={handleChange}
                            className='' id="">
                            <option value="px">px</option>
                            <option value="rem">rem</option>
                            <option value="em">em</option>
                            <option value="vh">vh</option>
                        </select>
                    </div>
                    {/* Font size range */}
                    <div className="slidecontainer spaceBetween">
                        <input
                            name="fontSizeValue"
                            onChange={handleChange}
                            type="range"
                            min="1"
                            max="100"
                            value={formData?.fontSizeValue}
                            className="slider"
                            id="myRange"
                        />
                        <p className="rangeValue">{formData?.fontSizeValue}</p>
                    </div>
                </div>
                {/* Font weight */}
                <div className="spaceBetween">
                    <p>Weight</p>
                    <select
                        name="fontWeight"
                        defaultValue={formData?.fontWeight}
                        onChange={handleChange}
                        className='selectionDropdown selectIconStyled' id="">
                        <option value="600">600 (Semi Bold)</option>
                        <option value="700">700 (Bold)</option>
                        <option value="400">400 (Normal)</option>
                    </select>
                </div>
                {/* Text transform */}
                <div className="spaceBetween actionGap">
                    <p>Transform</p>
                    <select
                        name="textTransform"
                        defaultValue={formData?.textTransform}
                        onChange={handleChange}
                        className='selectionDropdown selectIconStyled' id="">
                        <option value="none">Default</option>
                        <option value="uppercase">Uppercase</option>
                        <option value="lowercase">Lowercase</option>
                    </select>
                </div>
                {/* Font style */}
                <div className="spaceBetween actionGap">
                    <p>Style</p>
                    <select
                        name="fontStyle"
                        defaultValue={formData?.fontStyle}
                        onChange={handleChange}
                        className='selectionDropdown selectIconStyled' id="">
                        <option value="normal">Default</option>
                        <option value="italic">Italic</option>
                        <option value="inherit">Inherit</option>
                    </select>
                </div>
                {/* Text decoration */}
                <div className="spaceBetween actionGap">
                    <p>Decoration</p>
                    <select
                        name="textDecoration"
                        defaultValue={formData?.textDecoration}
                        onChange={handleChange}
                        className='selectionDropdown selectIconStyled' id="">
                        <option value="none">Default</option>
                        <option value="solid">Solid</option>
                        <option value="dotted">Dotted</option>
                        <option value="dashed">Dashed</option>
                    </select>
                </div>
                {/* Line height */}
                <div className="actionGap">
                    <div className="spaceBetween actionGap">
                        <div className="flex">
                            <p className="me-1">Line-Height</p>
                            <LuMonitor />
                        </div>
                        {/* Line height utility */}
                        <select
                            name="lineHeightValueUnit"
                            defaultValue={formData?.lineHeightValueUnit}
                            onChange={handleChange}
                            className='' id="">
                            <option value="px">px</option>
                            <option value="rem">rem</option>
                            <option value="em">em</option>
                            <option value="vh">vh</option>
                        </select>
                    </div>
                    <div className="slidecontainer spaceBetween">
                        {/* Line height range */}
                        <input
                            name="lineHeightValue"
                            defaultValue={formData?.lineHeightValue}
                            onChange={handleChange}
                            type="range"
                            min="1"
                            max="100"
                            className="slider"
                            id="myRange"
                        />
                        <p className="rangeValue">{formData?.lineHeightValue}</p>
                    </div>
                </div>
                {/* Letter spacing */}
                <div className="actionGap">
                    <div className="spaceBetween actionGap">
                        <div className="flex">
                            <p className="me-1">Letter Spacing</p>
                            <LuMonitor />
                        </div>
                        {/* Letter spacing utility */}
                        <select
                            name="letterSpacingValueUnit"
                            defaultValue={formData?.letterSpacingValueUnit}
                            onChange={handleChange}
                            className='' id="">
                            <option value="px">px</option>
                            <option value="rem">rem</option>
                            <option value="em">em</option>
                            <option value="vh">vh</option>
                        </select>
                    </div>
                    <div className="slidecontainer spaceBetween">
                        {/* Letter spacing range */}
                        <input
                            name="letterSpacingValue"
                            defaultValue={formData?.letterSpacingValue}
                            onChange={handleChange}
                            type="range"
                            min="1"
                            max="100"
                            className="slider"
                            id="myRange"
                        />
                        <p className="rangeValue">{formData?.letterSpacingValue}</p>
                    </div>
                </div>
                {/* Word spacing */}
                <div className="actionGap">
                    <div className="spaceBetween actionGap">
                        <div className="flex">
                            <p className="me-1">Word Spacing</p>
                            <LuMonitor />
                        </div>
                        {/* Word spacing utility */}
                        <select
                            name="wordSpacingValueUnit"
                            defaultValue={formData?.wordSpacingValueUnit}
                            onChange={handleChange}
                            className='' id="">
                            <option value="px">px</option>
                            <option value="rem">rem</option>
                            <option value="em">em</option>
                            <option value="vh">vh</option>
                        </select>
                    </div>
                    <div className="slidecontainer spaceBetween">
                        {/* Word spacing range */}
                        <input
                            name="wordSpacingValue"
                            defaultValue={formData?.wordSpacingValue}
                            onChange={handleChange}
                            type="range"
                            min="1"
                            max="100"
                            className="slider"
                            id="myRange"
                        />
                        <p className="rangeValue">{formData?.wordSpacingValue}</p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ModalActions;
