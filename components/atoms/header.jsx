import { configsContext } from '@commons/context/recoil-context';
import lessonList from '@components/lessons/lesson-list';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md';
import { FiChevronDown, FiX } from 'react-icons/fi';

import { useRecoilState } from 'recoil';
import OverlayMenu from 'overlaymenu';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import StoryList from '@components/old/StoryList';
import { useTheme } from 'next-themes';
import Card from './card';

const LanguageList = [
  'English',
  'Hindi',
  'Nepali',
  'Punjabi',
  'Bengali',
  'Tamil',
  'Urdu',
];

const LessonsSelector = ({ visible, setVisible }) => {
  const [configs, setConfigs] = useRecoilState(configsContext);
  const ref = useRef();

  return (
    <OverlayMenu visible={visible} setVisible={setVisible} container_ref={ref}>
      <div className="flex justify-center items-center fixed bg-black w-full h-full z-20 bg-opacity-75 top-0 left-0 font-rhodium_libre cursor-pointer">
        <motion.div
          whileTap={{ y: 2 }}
          className="right-6 top-6 bg-primary-300 absolute p-1 text-2xl rounded-full hover:bg-primary-400"
        >
          <FiX />
        </motion.div>
        <div
          ref={ref}
          className="bg-white max-h-[40vh] flex flex-col min-w-[13rem] cursor-auto rounded-md overflow-hidden"
        >
          <div className="flex bg-primary-900 text-white p-2 font-bold tracking-wider pb-1">
            Lessons
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto text-primary-900">
            {lessonList.map((lesson, index) => (
              <motion.div
                whileTap={{ y: 2 }}
                key={lesson}
                className={classNames(
                  'flex justify-between items-center hover:bg-gray-200 relative py-2 pb-1.5 px-3 text-sm text-center  cursor-pointer active:bg-primary-200',
                  {
                    'bg-primary-200': configs.lsnIndex === index,
                  }
                )}
                onClick={() => {
                  setConfigs((prev) => ({
                    ...prev,
                    lsnIndex: index,
                  }));
                  setVisible(false);
                }}
              >
                Lesson {index + 1}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </OverlayMenu>
  );
};

const LanguageSelector = ({ visible, setVisible }) => {
  const [configs, setConfigs] = useRecoilState(configsContext);
  const ref = useRef();
  return (
    <OverlayMenu visible={visible} setVisible={setVisible} container_ref={ref}>
      <div className="flex justify-center items-center fixed bg-black w-full h-full z-20 bg-opacity-75 top-0 left-0 font-rhodium_libre cursor-pointer">
        <motion.div
          whileTap={{ y: 2 }}
          className="right-6 top-6 bg-primary-300 absolute p-1 text-2xl rounded-full hover:bg-primary-400"
        >
          <FiX />
        </motion.div>

        <div
          ref={ref}
          className="bg-white max-h-[40vh] flex flex-col min-w-[13rem] cursor-auto rounded-md overflow-hidden"
        >
          <div className="flex bg-primary-900 text-white p-2 font-bold tracking-wider pb-1">
            Languages
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto text-primary-900">
            {LanguageList.map((language) => (
              <motion.div
                whileTap={{ y: 2 }}
                key={language}
                className={classNames(
                  'flex justify-between items-center hover:bg-gray-200 relative py-2 pb-1.5 px-3 text-sm text-center  cursor-pointer active:bg-primary-200',
                  {
                    'bg-primary-200': configs.language === language,
                  }
                )}
                onClick={() => {
                  setConfigs((prev) => ({
                    ...prev,
                    language,
                  }));
                  setVisible(false);
                }}
              >
                {language}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </OverlayMenu>
  );
};

const StorySelector = ({ visible, setVisible }) => {
  const [configs, setConfigs] = useRecoilState(configsContext);
  const ref = useRef();
  return (
    <OverlayMenu visible={visible} setVisible={setVisible} container_ref={ref}>
      <div className="flex justify-center items-center fixed bg-black w-full h-full z-20 bg-opacity-75 top-0 left-0 font-rhodium_libre cursor-pointer">
        <motion.div
          whileTap={{ y: 2 }}
          className="right-6 top-6 bg-primary-300 absolute p-1 text-2xl rounded-full hover:bg-primary-400"
        >
          <FiX />
        </motion.div>
        <div
          ref={ref}
          className="bg-white max-h-[40vh] flex flex-col min-w-[13rem] cursor-auto rounded-md overflow-hidden"
        >
          <div className="flex bg-primary-900 text-white p-2 font-bold tracking-wider pb-1">
            Lessons
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto text-primary-900">
            {StoryList.map((story, index) => (
              <motion.div
                whileTap={{ y: 2 }}
                key={story}
                className={classNames(
                  'flex justify-between items-center hover:bg-gray-200 relative py-2 pb-1.5 px-3 text-sm text-center  cursor-pointer active:bg-primary-200',
                  {
                    'bg-primary-200': configs.storyIndex === index,
                  }
                )}
                onClick={() => {
                  setConfigs((prev) => ({
                    ...prev,
                    storyIndex: index,
                  }));
                  setVisible(false);
                }}
              >
                Story {index + 1}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </OverlayMenu>
  );
};

const Header = ({
  index = 0,
  lsnIndex = 0,
  storyIndex = 0,
  speed = { speed: 0 },
  accuracy = 100,
  isWithLesson = false,
  isWithStories = false,
  isWithCustomStories = false,
  isRandomType = false,
  isIssuePage = false,
  page = '',
}) => {
  const [configs, setConfigs] = useRecoilState(configsContext);

  const [lessonModal, setLessonModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);
  const [storiesModal, setStoriesModal] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme(configs.Dark ? 'dark' : 'light');
  }, [configs.Dark]);

  return (
    <>
      <LessonsSelector visible={lessonModal} setVisible={setLessonModal} />
      <LanguageSelector visible={languageModal} setVisible={setLanguageModal} />
      <StorySelector visible={storiesModal} setVisible={setStoriesModal} />

      <div className="flex justify-center z-10">
        <div className="flex gap-6 w-full max-w-screen-xl p-3 py-6">
          <span className="flex flex-col fixed text-primary-900 text-base font-redressed tracking-wider gap-1 left-6 top-32">
            <Link href="/">
              <a className="hover:text-primary-500 relative -left-3">Home</a>
            </Link>
            <div className="relative origin-bottom-left flex flex-col items-start border-l gap-1 border-primary-900">
              {[
                { link: '/lessons', label: 'Lessons' },
                { link: '/stories', label: 'Stories' },
                { link: '/custom-stories', label: 'Custom Stories' },
                { link: '/random-type', label: 'Random Type' },
                { link: '/issues', label: 'Issues' },
              ].map(({ link, label }) => (
                <Link key={link} href={link}>
                  <a
                    className={classNames('hover:text-primary-500 flex gap-2', {
                      'text-red-900':
                        page.toLowerCase() === label.toLowerCase(),
                      'text-primary-900':
                        page.toLowerCase() !== label.toLowerCase(),
                    })}
                  >
                    <span>-&gt;</span>
                    {label}
                  </a>
                </Link>
              ))}
            </div>
          </span>

          <div className="flex w-full">
            <div className="flex-1 relative">
              <Link href="/">
                <a>
                  <h1 className="text-primary-900 text-2xl font-resique cursor-pointer select-none inline-flex relative">
                    <span className="whitespace-pre">Typing Guru</span>
                    <span className="font-rhodium_libre text-xs font-bold text-primary-500 tracking-wider absolute top-[calc(100%-5px)] right-0 capitalize">
                      {page}
                    </span>
                  </h1>
                </a>
              </Link>
            </div>

            {!isIssuePage && (
              <div className="flex gap-6">
                {!isRandomType && (
                  <>
                    {configs.Progress && (
                      <Card
                        varient="sm"
                        className="font-redressed px-8 w-[10rem]"
                      >
                        <div>Progress</div>

                        <div className="text-right my-1">
                          <span className="text-3xl">
                            {(
                              (index / lessonList[lsnIndex].length) *
                              100
                            ).toFixed(0)}
                          </span>{' '}
                          <span>% done</span>
                        </div>
                      </Card>
                    )}
                    {configs.Speed && (
                      <Card
                        varient="sm"
                        className="font-redressed px-8 w-[10rem]"
                      >
                        <div>Speed</div>
                        <div className="text-right my-1">
                          <span className="text-3xl">
                            {(speed && (speed.speed > 300 ? 0 : speed.speed)) ||
                              0}
                          </span>{' '}
                          <span>wpm</span>
                        </div>
                      </Card>
                    )}

                    {configs.Accuracy && (
                      <Card
                        varient="sm"
                        className="font-redressed px-8 w-[10rem]"
                      >
                        <div>Accuracy</div>
                        <div className="text-right my-1">
                          <span className="text-3xl">{accuracy}</span>{' '}
                          <span>%</span>
                        </div>
                      </Card>
                    )}
                  </>
                )}

                <div className="flex flex-col gap-3 font-rhodium_libre justify-between">
                  <motion.div
                    whileTap={{ y: 2 }}
                    className="cursor-pointer border border-primary-300 select-none text-primary-900 bg-primary-50 px-6 py-2 rounded-lg shadow-lg hover:border-primary-500 flex items-center gap-2 whitespace-pre justify-between"
                    onClick={() => {
                      setLanguageModal((s) => !s);
                    }}
                  >
                    {configs.language}
                    <FiChevronDown />
                  </motion.div>

                  {isWithLesson && (
                    <motion.div
                      whileTap={{ y: 2 }}
                      className="cursor-pointer border border-primary-300 select-none text-primary-900 bg-primary-50 px-6 py-2 rounded-lg shadow-lg hover:border-primary-500 flex items-center gap-2 whitespace-pre justify-between"
                      onClick={() => {
                        setLessonModal((s) => !s);
                      }}
                    >
                      {`Lesson ${lsnIndex + 1}`}
                      <FiChevronDown />
                    </motion.div>
                  )}
                  {isWithStories && (
                    <motion.div
                      whileTap={{ y: 2 }}
                      className="cursor-pointer border border-primary-300 select-none text-primary-900 bg-primary-50 px-6 py-2 rounded-lg shadow-lg hover:border-primary-500 flex items-center gap-2 whitespace-pre justify-between"
                      onClick={() => {
                        setStoriesModal((s) => !s);
                      }}
                    >
                      {`Story ${storyIndex + 1}`}
                      <FiChevronDown />
                    </motion.div>
                  )}
                </div>

                <div className="flex flex-col gap-2 text-primary-900 py-1">
                  {['Keyboard', 'Hands', 'Dark'].map((item) => {
                    const iconClass = 'text-xl relative bottom-1';
                    if (item === 'Hands' && !configs.Keyboard) {
                      return null;
                    }
                    return (
                      <motion.div
                        whileTap={{ y: 2 }}
                        key={item}
                        className="flex items-center font-rhodium_libre gap-1 select-none cursor-pointer"
                        onClick={() => {
                          setConfigs((s) => ({
                            ...s,
                            [item]: !configs[item],
                          }));
                        }}
                      >
                        {configs[item] ? (
                          <MdOutlineCheckBox className={iconClass} />
                        ) : (
                          <MdCheckBoxOutlineBlank className={iconClass} />
                        )}
                        {item}
                      </motion.div>
                    );
                  })}
                </div>
                {!isRandomType && (
                  <div className="flex flex-col py-1 gap-2 text-primary-900">
                    {['Progress', 'Speed', 'Accuracy'].map((item) => {
                      const iconClass = 'text-xl relative bottom-1';
                      return (
                        <motion.div
                          whileTap={{ y: 2 }}
                          key={item}
                          className="flex items-center font-rhodium_libre gap-1 select-none cursor-pointer"
                          onClick={() => {
                            setConfigs((s) => ({
                              ...s,
                              [item]: !configs[item],
                            }));
                          }}
                        >
                          {configs[item] ? (
                            <MdOutlineCheckBox className={iconClass} />
                          ) : (
                            <MdCheckBoxOutlineBlank className={iconClass} />
                          )}
                          {item}
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* {children} */}
        </div>
      </div>
    </>
  );
};
export default Header;
