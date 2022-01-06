import { recoilPersist } from 'recoil-persist';
import { atom } from 'recoil';

const { persistAtom } = recoilPersist();

export const configsContext = atom({
  key: 'configsContext',
  default: {
    Hand: true,
    Keyboard: true,
    Dark: false,
    Progress: true,
    Speed: true,
    Accuracy: true,
    lsnIndex: 0,
    storyIndex: 0,
    language: 'English',
  },
  effects_UNSTABLE: [persistAtom],
});
