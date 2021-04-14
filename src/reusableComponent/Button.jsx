import React from "react";
import Button from "@material-ui/core/Button";

const ButtonComponent = (props) => {
  return (
    <div>
      <Button
        variant="contained"
        style={{width:200}}
        color="primary"
        size="large"
        type={props.type}
        disabled={props.isdisabled}
      >
        {props.title}
      </Button>
    </div>
  );
};

export default ButtonComponent;
