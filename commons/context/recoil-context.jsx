import { atom } from 'recoil';

export const configsContext = atom({
  key: 'configsContext',
  default:
    typeof window !== 'undefined' && localStorage.getItem('configsContext')
      ? JSON.parse(localStorage.getItem('configsContext'))
      : // : {},
        {
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
});

export const customStoriesContext = atom({
  key: 'customStories',
  default:
    typeof window !== 'undefined' && localStorage.getItem('customStories')
      ? JSON.parse(localStorage.getItem('customStories'))
      : [],
});
