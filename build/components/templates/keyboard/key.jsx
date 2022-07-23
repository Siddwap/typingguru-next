import React from 'react';
import classNames from 'classnames';

function Key({
  className,
  activeKey,
  keyMatch,
  wrongKey,
  keys,
  keyMatchFun = (_) => {
    return false;
  },
}) {
  return (
    <div
      className={classNames(className, {
        active:
          activeKey &&
          keyMatch &&
          (activeKey.key === keyMatch[0] ||
            activeKey.key === keyMatch[1] ||
            activeKey.key === keyMatchFun(activeKey)),
        'wrong-key':
          wrongKey &&
          keyMatch &&
          (activeKey.key === keyMatch[0] ||
            activeKey.key === keyMatch[1] ||
            activeKey.key === keyMatchFun(activeKey)),
      })}
    >
      {keys}
    </div>
  );
}

export default Key;
