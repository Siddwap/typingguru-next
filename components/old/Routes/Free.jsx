import { motion } from "framer-motion";
import React, { useState } from "react";
import Header from "../Components/Header";
import Keyboard from "../Components/Keyboard";

function Free(props) {
  const [activeKey, setactiveKey] = useState(null);

  return (
    <>
      <Header menu="free" theme={props.theme} lang={props.lang} />
      <motion.textarea
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.25 }}
        spellCheck="false"
        autoComplete="off"
        autoCorrect="off"
        className={"freeTA " + props.lang.languageChoice}
        onKeyPress={(e) => setactiveKey(e)}
      />
      <Keyboard
        activeKey={activeKey}
        lang={props.lang}
        className={props.lang.languageChoice + " " + props.theme.theme}
      />
    </>
  );
}

export default Free;
