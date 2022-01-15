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
    customStoryIndex: 0,
    language: 'English',
    isModalOpen: false,
  },
  effects_UNSTABLE: [persistAtom],
});

export const customStoriesContext = atom({
  key: 'customStories',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
