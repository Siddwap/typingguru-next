import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Keyboard from "../Components/Keyboard";
import { shiftOnKeyList } from "../Components/Lessons";
import LsnList from "../Components/LsnList";
import StoryList from "../Components/StoryList";

function Stories(props) {
  const [wrongKey, setwrongKey] = useState(null);

  const [activeKey, setactiveKey] = useState(null);

  const [StoryIndex, setStoryIndex] = useState(
    Math.floor(Math.random() * StoryList.length)
  );

  const [grandString, setgrandString] = useState(StoryList[StoryIndex]);

  const [mainString, setmainString] = useState("");
  const [dispStrings, setdispStrings] = useState({
    str1: "Hand",
    str2: "k",
    str3: "chief",
  });
  const [errorIndex, seterrorIndex] = useState({});

  const [mainIndex, setmainIndex] = useState(0);

  const isShiftOn = (key) => {
    if (!key) return false;
    if (shiftOnKeyList.indexOf(key) !== -1) return true;
    else return false;
  };

  const [strLen, setstrLen] = useState(50);

  const [index, setindex] = useState(0);

  useEffect(() => {
    if (strLen == index) {
      // setmainString(grandString.substring(index, index + LsnList));
      setmainIndex(mainIndex + strLen);
      setindex(0);
      return;
    }
    setdispStrings((s) => {
      return {
        ...s,
        str1: mainString.substring(0, index),
        str2: mainString.substring(index, index + 1),
        str3: mainString.substring(index + 1),
      };
    });
    setactiveKey({
      key: mainString[index % strLen] ? mainString[index % strLen] : null,
      shiftKey: isShiftOn(mainString[index % strLen]),
    });
  }, [index, mainString]);

  useEffect(() => {
    if (inpRef.current) inpRef.current.focus();
    if (!grandString) {
      // setgrandString();
      return;
    }
    // setindex(0);
    setmainString(grandString.substring(mainIndex, mainIndex + strLen));
  }, [mainIndex]);

  const [speed, setspeed] = useState(null);

  function diff_seconds(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(diff);
  }

  const handleKeyPress = (e) => {
    if (!speed) {
      setspeed({
        speed: 0,
        start: new Date(),
        end: 0,
      });
    } else {
      setspeed((s) => {
        return {
          ...s,
          end: new Date(),
          speed: (
            (Number(s.speed) +
              Number(
                (
                  grandString.substring(0, mainIndex + index).split(" ")
                    .length / diff_seconds(new Date(), speed.start)
                ).toFixed(0)
              )) /
            2
          ).toFixed(0),
        };
      });
    }

    if (e.key === mainString[index]) {
      setactiveKey(e);
      setwrongKey(null);
      if (index > Number(strLen / 2)) {
        setmainIndex(mainIndex + 1);
        // setmainString(grandString.substring(mainIndex, mainIndex + strLen));
      } else setindex(index + 1);
    } else {
      seterrorIndex((s) => {
        return {
          ...s,
          [mainIndex + index]: true,
        };
      });
      setwrongKey(e);
    }
  };

  const inpRef = React.createRef();

  return (
    <>
      <Header theme={props.theme} menu={"stories"} lang={props.lang} />

      <div className="info-cont">
        <div>
          <span>Speed:</span>
          <span>{speed ? speed.speed : 0}wpm</span>
        </div>
        <div>
          <span> Accuracy:</span>
          <span>
            {(
              100 -
              (Object.keys(errorIndex).length / (mainIndex + index)) * 100
            ).toFixed(0)}
            %
          </span>
        </div>
        <div>
          <span>Complete:</span>
          <span>
            {(((mainIndex + index) / grandString.length) * 100).toFixed(0)}%
          </span>
        </div>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.25 }}
        className="stories-typing"
      >
        <span className="done">
          {dispStrings.str1.split("").map((item, indx) => {
            return (
              <span className={errorIndex[mainIndex + indx] ? "red" : ""}>
                {item}
              </span>
            );
          })}
        </span>
        <span className="cursor">{dispStrings.str2}</span>
        <span className="pending">{dispStrings.str3}</span>

        <input
          type="text"
          maxLength="0"
          onKeyPress={handleKeyPress}
          ref={inpRef}
          onBlur={(e) => {
            inpRef.current.focus();
          }}
        />
      </motion.div>

      <Keyboard
        activeKey={activeKey}
        wrongKey={wrongKey}
        lang={props.lang}
        className={props.lang.languageChoice + " " + props.theme.theme}
      />
    </>
  );
}

export default Stories;
