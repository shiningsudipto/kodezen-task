const RightSidebar = ({ formData }) => {
    return (
        <div className="rightSidebar">
            <p>you can</p>
            {/* Applying all styles dynamically */}
            <h2
                style={{
                    fontSize: formData?.fontSizeValue + formData?.fontSizeValueUnit,
                    textTransform: formData?.textTransform,
                    fontWeight: formData?.fontWeight,
                    border: `2px ${formData?.textDecoration} red`,
                    textDecoration: formData?.textDecoration,
                    fontFamily: formData?.fontFamily,
                    fontStyle: formData?.fontStyle,
                    lineHeight: formData?.lineHeightValue + formData?.lineHeightValueUnit,
                    letterSpacing: formData?.letterSpacingValue + formData?.letterSpacingValueUnit,
                    wordSpacing: formData?.wordSpacingValue + formData?.wordSpacingValueUnit
                }}
                className=""
            >
                Apply On Me
            </h2>
            <p>all styles</p>
        </div>
    );
};

export default RightSidebar;
