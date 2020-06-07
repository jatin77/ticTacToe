import React from "react";
import CrossIcon from "../../common/crossIcon/CrossIcon";
import ZeroIcon from "../../common/zeroIcon/ZeroIcon";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";

function SelectPlayMode(props) {
  return (
    <div className="text-center">
      <div style={{ height: "156px", display: "flex" }}>
        <CrossIcon checked large={true} />
        <ZeroIcon large={true} checked />
      </div>
      <div className="mt-16">
        <Typography variant="h6" gutterBottom>
          Choose your play mode
        </Typography>
        <div className="mt-10">
          <Fab
            style={{
              background: "linear-gradient(to bottom, #00c6ff, #0072ff)",
              color: "#fff",
              width: "200px",
            }}
            size="medium"
            variant="extended"
            onClick={() => props.handlePlayMode("comp")}
          >
            With Computer
          </Fab>
          <div className="mt-5">
            <Fab
              size="medium"
              variant="extended"
              onClick={() => props.handlePlayMode("friend")}
              style={{
                width: "200px",
                background: "#fff",
              }}
            >
              With A Friend
            </Fab>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectPlayMode;
