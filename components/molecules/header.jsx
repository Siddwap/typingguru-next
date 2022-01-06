import React from 'react';
import { languageContext } from '@commons/context/recoil-context';
import { useRecoilState } from 'recoil';
import { Select } from '@components/atoms/select';

const Header = () => {
  const [language, setLanguage] = useRecoilState(languageContext);

  const options = [
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'nepali', label: 'Nepali' },
    { value: 'punjabi', label: 'Punjabi' },
    { value: 'bengali', label: 'Bengali' },
    { value: 'tamil', label: 'Tamil' },
    { value: 'urdu', label: 'Urdu' },
  ];

  return (
    <div className="flex items-center border-b py-1 pb-2 px-2 border-primary mb-4 dark:bg-red-500">
      <Select
        options={options}
        value={language}
        onChange={(e) => setLanguage(e)}
        className="flex"
      />
    </div>
  );
};

export default Header;
