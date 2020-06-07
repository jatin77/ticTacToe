import React, { useState } from "react";
import CrossIcon from "../../common/crossIcon/CrossIcon";
import ZeroIcon from "../../common/zeroIcon/ZeroIcon";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./pickSide.style.css";
import Button from "@material-ui/core/Button";

function PickSide(props) {
  const [value, setValue] = useState("x");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSidePick(value);
  };

  return (
    <div className="text-center">
      <div style={{ height: "156px", display: "flex" }}>
        <CrossIcon large={true} checked={value === "x"} secondScreen={true} />
        <div className="mx-10"></div>
        <ZeroIcon large={true} checked={value === "o"} secondScreen={true} />
      </div>
      <div className="mt-16">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <RadioGroup
            aria-label="player"
            name="player"
            value={value}
            onChange={handleChange}
          >
            <div className="flex">
              <FormControlLabel
                color="primary"
                value="x"
                control={<Radio color="primary" />}
              />
              <div className="radio-spacer"></div>
              <FormControlLabel value="o" control={<Radio color="primary" />} />
            </div>
          </RadioGroup>
          <div className="text-center mt-8">
            <Button
              className="w-full"
              type="submit"
              variant="contained"
              size="medium"
              style={{
                background: "#fff",
                color: "#000",
                borderRadius: "20px",
              }}
            >
              Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PickSide;
