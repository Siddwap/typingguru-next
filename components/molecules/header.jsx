import React from 'react';
import { languageContext } from '@commons/context/recoil-context';
import { useRecoilState } from 'recoil';
import { Select } from '@components/atoms/select';

const Header = () => {
  const [language, setLanguage] = useRecoilState(languageContext);

  const options = [
    { value: 'english', label: 'English' },
    { value: 'hindi', label: 'Hindi' },
    { value: 'bengali', label: 'Bengali' },
    { value: 'punjabi', label: 'Punjabi' },
    { value: 'tamil', label: 'Tamil' },
    { value: 'telugu', label: 'Telugu' },
    { value: 'marathi', label: 'Marathi' },
  ];
  return (
    <div className="flex items-center border-b py-1 pb-2 px-2 border-primary mb-4">
      <Select
        options={options}
        value={language}
        onChange={(e) => setLanguage(e)}
        className="flex"
        isSearchable
      />
    </div>
  );
};

export default Header;
