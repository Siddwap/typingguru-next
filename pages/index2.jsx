import MainLayout from '@components/templates/main-layout';
import { createRef, useEffect, useState } from 'react';
import { shiftOnKeyList } from '@components/lessons';
import lessonList from '@components/lessons/lesson-list';
import { toast } from 'react-toastify';
import { languageContext } from '@commons/context/recoil-context';
import { useRecoilValue } from 'recoil';
import { motion } from 'framer-motion';
import Keyboard from '@components/templates/keyboard';
import classNames from 'classnames';

const Progressbar = ({ index, lsnIndex }) => {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.5 }}
      className="slider-outer"
    >
      <div className="slider">
        <div
          className="fill"
          style={{ width: `${(index / lessonList[lsnIndex].length) * 100}%` }}
        >
          <span>
            {((index / lessonList[lsnIndex].length) * 100).toFixed(0)}
          </span>
        </div>
      </div>
      <div className="info">
        <span className="start">0%</span>
        <span className="middle">50%</span>
        <span className="end">100%</span>
      </div>
    </motion.div>
  );
};

const Home = () => {
  const languageChoice = useRecoilValue(languageContext);
  const myref = createRef();
  useEffect(() => {
    if (!myref.current) return;
    myref.current.focus();
  }, [myref]);
  const strLen = 16;

  const [grandMainStrng, setgrandMainStrng] = useState(lessonList[0]);
  const [speed, setspeed] = useState(null);
  const [mainString, setmainString] = useState('');
  const [halfFirst, sethalfFirst] = useState('');
  const [halfSecond, sethalfSecond] = useState('');
  const [activeKey, setactiveKey] = useState(null);
  const [wrongKey, setwrongKey] = useState(null);
  const [index, setindex] = useState(0);
  const [lsnIndex, setlsnIndex] = useState(0);
  const [refresh, setrefresh] = useState(true);

  const [hintText, sethintText] = useState('');
  const isShiftOn = (key) => {
    if (!key) return false;
    if (shiftOnKeyList.indexOf(key) !== -1) return true;
    return false;
  };

  const handleStrings = () => {
    sethalfFirst(mainString.substring(0, index % strLen));
    sethalfSecond(mainString.substring(index % strLen, mainString.length));
    sethintText(
      grandMainStrng.substring(
        index - (index % strLen) + strLen,
        index - (index % strLen) + strLen + 8
      )
    );
    _handleKeyDown(null);
  };

  function diffSeconds(dt2, dt1) {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= 60;
    return Math.abs(diff);
  }

  const _handleKeyDown = (event) => {
    if (event && event.key === mainString[index % strLen]) {
      if (index + 1 >= grandMainStrng.length) {
        if (lsnIndex >= lessonList.length) {
          toast.success('You have completed all lessons');
          return;
        }
        setindex(0);
        setgrandMainStrng(lessonList[lsnIndex + 1]);
        setlsnIndex(lsnIndex + 1);
        return;
      }
      setindex(index + 1);

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
              grandMainStrng.substring(0, index).split(' ').length /
              diffSeconds(new Date(), speed.start)
            ).toFixed(0),
          };
        });
      }
    }

    setactiveKey({
      key: mainString[index % strLen] ? mainString[index % strLen] : null,
      shiftKey: isShiftOn(mainString[index % strLen]),
    });
    setwrongKey(
      event && event.key === mainString[index % strLen] ? null : event
    );
  };
  useEffect(() => {
    setmainString(
      grandMainStrng.substring(
        index - (index % strLen),
        index - (index % strLen) + strLen
      )
    );
    handleStrings();
  }, [index, strLen, mainString, refresh]);

  useEffect(() => {
    setgrandMainStrng(lessonList[lsnIndex]);
    setindex(0);
    setspeed(null);
    handleStrings();
    setrefresh(!refresh);
  }, [lsnIndex]);

  useEffect(() => {
    setspeed(null);
    setindex(0);
  }, [languageChoice]);

  return (
    <MainLayout>
      {/* <Header */}
      {/*   lang={props.lang} */}
      {/*   theme={props.theme} */}
      {/*   speed={speed} */}
      {/*   lsnIndex={lsnIndex} */}
      {/*   setlsnIndex={setlsnIndex} */}
      {/*   menu="home" */}
      {/* /> */}
      <Progressbar index={index} lsnIndex={lsnIndex} />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.25 }}
        className={classNames('typing-view', languageChoice.label)}
      >
        <div>
          <span>
            {mainString.replace(/ /g, '\u00a0')}
            <span className="virtual">{hintText.replace(/ /g, '\u00a0')}</span>
          </span>
        </div>
        <div>
          <span>{halfFirst.replace(/ /g, '\u00a0')}</span>
          <span title="home">{halfSecond.replace(/ /g, '\u00a0')}</span>
          <input
            maxLength={1}
            id="inp"
            ref={myref}
            type="text"
            onBlur={() => {
              myref.current.focus();
            }}
            autoComplete="off"
            onKeyPress={_handleKeyDown}
          />
        </div>
      </motion.div>

      <div className="Nepali" />
      <br />
      <Keyboard
        activeKey={activeKey}
        wrongKey={wrongKey}
        className={classNames(languageChoice.label, 'day')}
      />
    </MainLayout>
  );
};

export default Home;
