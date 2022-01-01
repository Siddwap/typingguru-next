import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LsnList from "./LsnList";
import Select from "react-select";

function Header(props) {
  const { setlsnIndex, lsnIndex } = props;
  const [levSelector, setlevSelector] = useState(1);
  const { setlanguageChoice, languageChoice } = props.lang;
  const { theme, settheme } = props.theme;

  const getLessons = () => {
    const options = [];
    for (var i = 0; i < LsnList.length; i++) {
      options.push(<option value={i}>{"Lesson  " + +(i + 1)}</option>);
    }
    return options;
  };

  useEffect(() => {
    if (lsnIndex > 34) {
      setlevSelector(3);
    } else if (lsnIndex > 17) {
      setlevSelector(2);
    } else {
      setlevSelector(1);
    }
  }, [lsnIndex]);

  return (
    <header>
      <motion.div
        whileTap={{ scale: 1.1 }}
        whileHover={{ scale: 1.05, boxShadow: "1px 1px 3px #333" }}
        transition={{ duration: 0.1 }}
        className={"mb" + (props.menu === "home" ? " active" : "")}
      >
        <Link to="/">
          <div>
            <i className="fad fa-home fa-2x"></i>
          </div>
          <span>Home</span>
        </Link>
      </motion.div>
      <div className="mb hide">
        <div>
          <i></i>
        </div>
        <span>Add User</span>
      </div>
      <div className="mb hide">
        <div>
          <i></i>
        </div>
        <span>Top</span>
      </div>
      <div className="mb hide">
        <div>
          <i></i>
        </div>
        <span>Bottom</span>
      </div>
      <motion.div
        whileTap={{ scale: 1.1 }}
        whileHover={{ scale: 1.05, boxShadow: "1px 1px 3px #333" }}
        transition={{ duration: 0.1 }}
        className={"mb" + (props.menu === "stories" ? " active" : "")}
      >
        <Link to="/stories-typing">
          <div>
            <i className="fad fa-book-open fa-2x"></i>
          </div>
          <span>Stories</span>
        </Link>
      </motion.div>
      <motion.div
        whileTap={{ scale: 1.1 }}
        whileHover={{ scale: 1.05, boxShadow: "1px 1px 3px #333" }}
        transition={{ duration: 0.1 }}
        className={"mb" + (props.menu === "free" ? " active" : "")}
      >
        <Link to="/free-typing">
          <div>
            <i className="fad fa-keyboard fa-2x"></i>
          </div>
          <span>Free</span>
        </Link>
      </motion.div>
      <div className={"lev-selector" + (props.menu !== "home" ? " hide" : "")}>
        <motion.div
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1 }}
          onClick={(e) => {
            setlsnIndex(0);
            setlevSelector(1);
          }}
          className={levSelector === 1 ? "active" : ""}
        >
          <i></i> Level 1
        </motion.div>
        <motion.div
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1 }}
          onClick={(e) => {
            setlsnIndex(18);
            setlevSelector(2);
          }}
          className={levSelector === 2 ? "active" : ""}
        >
          <i></i> Level 2
        </motion.div>
        <motion.div
          whileTap={{ scale: 1.1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.1 }}
          onClick={(e) => {
            setlsnIndex(35);
            setlevSelector(3);
          }}
          className={levSelector === 3 ? "active" : ""}
        >
          <i></i> Level 3
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
        className="lang-selector-and-info"
      >
        
        <motion.select
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.1 }}
          value={languageChoice}
          onChange={(e) => setlanguageChoice(e.target.value)}
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Nepali">Nepali</option>
          <option value="Punjabi">Punjabi</option>
          <option value="Bengali">Bengali</option>
          <option value="Tamil">Tamil</option>
          <option value="Urdu">Urdu</option>
        </motion.select>
        <motion.select
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.1 }}
          onChange={(e) => settheme(e.target.value)}
          value={theme}
        >
          <option value="night">night</option>
          <option value="day">day</option>
        </motion.select>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
        className="lang-selector-and-info"
      >
        <motion.select
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          transition={{ duration: 0.1 }}
          onChange={(e) => setlsnIndex(e.target.value)}
          value={lsnIndex}
          className={"lev-selector" + (props.menu !== "home" ? " hide" : "")}
        >
          {getLessons()}
        </motion.select>

        <div>
          <div>
            <i></i>
          </div>
          <div>
            <div>
              <span className="hide">Name: </span>
              <span className="hide">Guest User</span>
            </div>

            <div className={props.menu === "stories" ? "hide" : ""}>
              Avg Speed:
              <span className="avg-speed">
                {props.speed ? props.speed.speed : 0}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
