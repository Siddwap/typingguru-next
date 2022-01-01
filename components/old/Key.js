import React from "react";

function Key(props) {
  return (
    <div
      className={
        props.className +
        (props.activeKey &&
        ((props.keyMatch && props.activeKey.key === props.keyMatch[0]) ||
          (props.keyMatch && props.activeKey.key === props.keyMatch[1]) ||
          (props.keyMatchFun && props.keyMatchFun(props.activeKey)))
          ? " active"
          : props.wrongKey &&
            ((props.keyMatch && props.wrongKey.key === props.keyMatch[0]) ||
              (props.keyMatch && props.wrongKey.key === props.keyMatch[1]) ||
              (props.keyMatchFun && props.keyMatchFun(props.wrongKey)))
          ? " wrong-active"
          : "")
      }
    >
      {props.keys}
    </div>
  );
}

export default Key;
