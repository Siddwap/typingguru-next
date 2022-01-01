import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Key from './Key';
import Hand from './Hand';

function Keyboard(props) {
  const [activeKey, setactiveKey] = useState(null);

  const [wrongKey, setwrongKey] = useState(null);
  useEffect(() => {
    setactiveKey(props.activeKey);
    setwrongKey(props.wrongKey);
  }, [props.activeKey, props.wrongKey]);

  const keylist = [
    {
      keys: <>Esc</>,
      className: 'key function space1',
      keyMatch: ['Escape'],
    },
    {
      keys: <>F1</>,
      className: 'key function',
      keyMatch: ['F1'],
    },
    {
      keys: <>F2</>,
      className: 'key function',
      keyMatch: ['F2'],
    },
    {
      keys: <>F3</>,
      className: 'key function',
      keyMatch: ['F3'],
    },
    {
      keys: <>F4</>,
      className: 'key function space2',
      keyMatch: ['F4'],
    },
    {
      keys: <>F5</>,
      className: 'key function',
      keyMatch: ['F5'],
    },
    {
      keys: <>F6</>,
      className: 'key function',
      keyMatch: ['F6'],
    },
    {
      keys: <>F7</>,
      className: 'key function',
      keyMatch: ['F7'],
    },
    {
      keys: <>F8</>,
      className: 'key function space2',
      keyMatch: ['F8'],
    },
    {
      keys: <>F9</>,
      className: 'key function',
      keyMatch: ['F9'],
    },
    {
      keys: <>F10</>,
      className: 'key function',
      keyMatch: ['F10'],
    },
    {
      keys: <>F11</>,
      className: 'key function',
      keyMatch: ['F11'],
    },
    {
      keys: <>F12</>,
      className: 'key function',
      keyMatch: ['F12'],
    },

    {
      keys: (
        <>
          ~<br />
          &nbsp;&nbsp;&nbsp;`
        </>
      ),
      className: 'key num dual',
      keyMatch: ['~', '`'],
    },
    {
      keys: (
        <>
          !<br />
          &nbsp;&nbsp;&nbsp;1
        </>
      ),
      className: 'key num dual',
      keyMatch: ['!', '1'],
    },
    {
      keys: (
        <>
          @<br />
          &nbsp;&nbsp;&nbsp;2
        </>
      ),
      className: 'key num dual',
      keyMatch: ['@', '2'],
    },
    {
      keys: (
        <>
          #<br />
          &nbsp;&nbsp;&nbsp;3
        </>
      ),
      className: 'key num dual',
      keyMatch: ['#', '3'],
    },
    {
      keys: (
        <>
          $<br />
          &nbsp;&nbsp;&nbsp;4
        </>
      ),
      className: 'key num dual',
      keyMatch: ['$', '4'],
    },
    {
      keys: (
        <>
          %<br />
          &nbsp;&nbsp;&nbsp;5
        </>
      ),
      className: 'key num dual',
      keyMatch: ['%', '5'],
    },
    {
      keys: (
        <>
          ^<br />
          &nbsp;&nbsp;&nbsp;6
        </>
      ),
      className: 'key num dual',
      keyMatch: ['^', '6'],
    },
    {
      keys: (
        <>
          &amp;
          <br />
          &nbsp;&nbsp;&nbsp;7
        </>
      ),
      className: 'key num dual',
      keyMatch: ['&', '7'],
    },
    {
      keys: (
        <>
          *<br />
          &nbsp;&nbsp;&nbsp;8
        </>
      ),
      className: 'key num dual',
      keyMatch: ['*', '8'],
    },
    {
      keys: (
        <>
          &#40;
          <br />
          &nbsp;&nbsp;&nbsp;9
        </>
      ),
      className: 'key num dual',
      keyMatch: ['(', '9'],
    },
    {
      keys: (
        <>
          &#41;
          <br />
          &nbsp;&nbsp;&nbsp;0
        </>
      ),
      className: 'key num dual',
      keyMatch: [')', 0],
    },
    {
      keys: (
        <>
          _<br />
          &nbsp;&nbsp;&nbsp;-
        </>
      ),
      className: 'key num dual',
      keyMatch: ['_', '-'],
    },

    {
      keys: (
        <>
          +<br />
          &nbsp;&nbsp;&nbsp;=
        </>
      ),
      className: 'key num dual',
      keyMatch: ['+', '='],
    },
    {
      keys: <>Backspace </>,
      className: 'key backspace',
      keyMatch: ['Backspace'],
    },
    {
      keys: <>Tab </>,
      className: 'key tab',
      keyMatch: ['Tab'],
    },
    {
      keys: (
        <>
          Q <br />
          &nbsp;&nbsp;&nbsp;q
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['Q', 'q'],
    },
    {
      keys: (
        <>
          W <br />
          &nbsp;&nbsp;&nbsp;w
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['W', 'w'],
    },
    {
      keys: (
        <>
          E <br />
          &nbsp;&nbsp;&nbsp;e
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['E', 'e'],
    },
    {
      keys: (
        <>
          R <br />
          &nbsp;&nbsp;&nbsp;r
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['R', 'r'],
    },
    {
      keys: (
        <>
          T <br />
          &nbsp;&nbsp;&nbsp;t
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['T', 't'],
    },
    {
      keys: (
        <>
          Y <br />
          &nbsp;&nbsp;&nbsp;y
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['Y', 'y'],
    },
    {
      keys: (
        <>
          U <br />
          &nbsp;&nbsp;&nbsp;u
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['U', 'u'],
    },
    {
      keys: (
        <>
          I <br />
          &nbsp;&nbsp;&nbsp;i
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['I', 'i'],
    },
    {
      keys: (
        <>
          O <br />
          &nbsp;&nbsp;&nbsp;o
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['O', 'o'],
    },
    {
      keys: (
        <>
          P <br />
          &nbsp;&nbsp;&nbsp;p
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['P', 'p'],
    },

    {
      keys: (
        <>
          &#123; <br />
          &nbsp;&nbsp;&nbsp;[
        </>
      ),
      className: 'key dual',
      keyMatch: ['[', '{'],
    },

    {
      keys: (
        <>
          &#125; <br />
          &nbsp;&nbsp;&nbsp;]
        </>
      ),
      className: 'key dual',
      keyMatch: ['}', ']'],
    },

    {
      keys: (
        <>
          |<br />
          &nbsp;&nbsp;&nbsp;\
        </>
      ),
      className: 'key letter dual slash',
      keyMatch: ['\\', '|'],
    },
    {
      keys: (
        <>
          Caps
          <br />
          Lock
        </>
      ),
      className: 'key caps',
      keyMatch: ['CapsLock'],
    },
    {
      keys: (
        <>
          A <br />
          &nbsp;&nbsp;&nbsp;a
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['a', 'A'],
    },
    {
      keys: (
        <>
          S <br />
          &nbsp;&nbsp;&nbsp;s
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['s', 'S'],
    },
    {
      keys: (
        <>
          D <br />
          &nbsp;&nbsp;&nbsp;d
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['d', 'D'],
    },
    {
      keys: (
        <>
          F <br />
          &nbsp;&nbsp;&nbsp;f
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['F', 'f'],
    },
    {
      keys: (
        <>
          G <br />
          &nbsp;&nbsp;&nbsp;g
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['G', 'g'],
    },
    {
      keys: (
        <>
          H <br />
          &nbsp;&nbsp;&nbsp;h
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['H', 'h'],
    },
    {
      keys: (
        <>
          J <br />
          &nbsp;&nbsp;&nbsp;j
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['j', 'J'],
    },
    {
      keys: (
        <>
          K <br />
          &nbsp;&nbsp;&nbsp;k
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['k', 'K'],
    },
    {
      keys: (
        <>
          L <br />
          &nbsp;&nbsp;&nbsp;l
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['L', 'l'],
    },
    {
      keys: (
        <>
          :<br />
          &nbsp;&nbsp;&nbsp;;
        </>
      ),
      className: 'key dual',
      keyMatch: [':', ';'],
    },
    {
      keys: (
        <>
          "<br />
          &nbsp;&nbsp;&nbsp;'
        </>
      ),
      className: 'key dual',
      keyMatch: ['"', "'"],
    },

    {
      keys: <>Enter</>,
      className: 'key enter',
      keyMatch: ['Enter'],
    },

    {
      keys: <>Shift</>,
      className: 'key shift left',
      keyMatch: ['Shift'],
      keyMatchFun: (activeKey) => {
        return activeKey.shiftKey;
      },
    },
    {
      keys: (
        <>
          Z <br />
          &nbsp;&nbsp;&nbsp;z
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['z', 'Z'],
    },
    {
      keys: (
        <>
          X <br />
          &nbsp;&nbsp;&nbsp;x
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['X', 'x'],
    },
    {
      keys: (
        <>
          C <br />
          &nbsp;&nbsp;&nbsp;c
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['C', 'c'],
    },
    {
      keys: (
        <>
          V <br />
          &nbsp;&nbsp;&nbsp;v
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['V', 'v'],
    },
    {
      keys: (
        <>
          B <br />
          &nbsp;&nbsp;&nbsp;b
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['b', 'B'],
    },
    {
      keys: (
        <>
          N <br />
          &nbsp;&nbsp;&nbsp;n
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['n', 'N'],
    },
    {
      keys: (
        <>
          M <br />
          &nbsp;&nbsp;&nbsp;m
        </>
      ),
      className: 'key letter dual',
      keyMatch: ['M', 'm'],
    },
    {
      keys: (
        <>
          &lt;
          <br />
          &nbsp;&nbsp;&nbsp;,
        </>
      ),
      className: 'key dual',
      keyMatch: [',', '<'],
    },
    {
      keys: (
        <>
          &gt; <br />
          &nbsp;&nbsp;&nbsp; .
        </>
      ),
      className: 'key dual',
      keyMatch: ['.', '>'],
    },
    {
      keys: (
        <>
          ? <br />
          &nbsp;&nbsp;&nbsp;/
        </>
      ),
      className: 'key dual',
      keyMatch: ['?', '/'],
    },

    {
      keys: <>Shift</>,
      className: 'key shift right',
      keyMatch: ['Shift'],
      keyMatchFun: (activeKey) => {
        return activeKey.shiftKey;
      },
    },
    {
      keys: <>Ctrl</>,
      className: 'key ctrl',
      keyMatch: ['Control'],
      keyMatchFun: (activeKey) => {
        return activeKey.ctrlKey;
      },
    },
    {
      keys: <>Win</>,
      className: 'key',
    },
    {
      keys: <>Alt</>,
      className: 'key',
      keyMatch: ['Alt'],
      keyMatchFun: (activeKey) => {
        return activeKey.altKey;
      },
    },
    {
      keys: <></>,
      className: 'key space',
      keyMatch: [' '],
    },
    {
      keys: <>Alt</>,
      className: 'key',
      keyMatch: ['Alt'],
      keyMatchFun: (activeKey) => {
        return activeKey.altKey;
      },
    },
    {
      keys: <>Win</>,
      className: 'key',
    },
    {
      keys: <>Fn</>,
      className: 'key',
    },

    {
      keys: <>Ctrl</>,
      className: 'key ctrl',
      keyMatch: ['Control'],
      keyMatchFun: (activeKey) => {
        return activeKey.ctrlKey;
      },
    },
  ];

  return (
    <section className="flex">
      <Hand activeKey={activeKey} wrongKey={wrongKey} leftHand />
      <motion.div
        initial={{ scale: 0, rotate: 30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className={`keyboard ${props.className}`}>
          <div className="section-a">
            {/* <!--END FUNCTION KEYS --> */}

            {keylist.map((item) => {
              return (
                <Key
                  key={`${item.id}`}
                  activeKey={activeKey}
                  wrongKey={wrongKey}
                  keys={item.keys}
                  className={item.className}
                  keyMatch={item.keyMatch}
                  keyMatchFun={item.keyMatchFun}
                />
              );
            })}
          </div>
        </div>
        {/* // <!-- end section-a--> */}
      </motion.div>
      {/* //   <!-- end sec-func --> */}

      <Hand activeKey={activeKey} wrongKey={wrongKey} rightHand />
    </section>
  );
}

export default Keyboard;
