import Header from '@components/atoms/header';
import Footer from '@components/atoms/footer';
import { motion } from 'framer-motion';
import { createRef, useEffect, useState } from 'react';
import Keyboard from '@components/templates/keyboard';
import { useRecoilState } from 'recoil';
import { configsContext } from '@commons/context/recoil-context';
import { shiftOnKeyList } from '@components/lessons';
import classNames from 'classnames';
import StoryList from '@components/old/StoryList';

const CustomStories = () => {
  const inpRef = createRef();

  const [configs, setConfigs] = useRecoilState(configsContext);

  return (
    <div className="flex flex-col min-w-min min-h-screen bg-gray-50 min-w-[1080px]">
      <Header
        {...{
          page: 'Issues',
          isIssuePage: true,
        }}
      />
      <div className="flex justify-center w-full z-50 text-red-500 font-bold font-redressed tracking-widest text-lg">
        This Feature is under development.
      </div>
      <Footer />
    </div>
  );
};

export default CustomStories;
