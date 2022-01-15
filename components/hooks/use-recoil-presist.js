import { useEffect } from 'react';
import { useRecoilState as useRState } from 'recoil';

export const usePersistentRecoilState = (context) => {
  const [state, setState] = useRState(context());

  useEffect(() => {
    const localStorageKey = context.key;
    console.log('kk', localStorageKey, state);
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, setState]);

  return [state, setState];
};
