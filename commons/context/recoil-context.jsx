import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

const { persistAtom } = recoilPersist();

export const languageContext = atom({
  key: 'languageContext',
  default: {},
  effects_UNSTABLE: [persistAtom],
});


