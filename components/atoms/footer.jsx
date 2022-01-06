import axios from 'axios';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [views, setviews] = useState(0);

  const increasePageView = () => {
    axios({
      url: 'https://api.anayak.com.np/vcnt/?ID=typingguru_site',
      method: 'get',
    })
      .then((res) => setviews(res.data.message))
      .catch((err) => console.log(err));
  };
  const isDev = process.env.NODE_ENV === 'development';
  useEffect(isDev ? () => {} : increasePageView, []);

  return (
    <footer className="flex justify-center w-full fixed bottom-0 font-ropa_sans text-primary-900 text-lg p-3">
      <div className="max-w-screen-xl w-full flex justify-between">
        <div className="flex gap-1">
          &copy; {new Date().getFullYear()}{' '}
          <a href="https://progman.in" className="flex">
            Progman
          </a>
        </div>
        {views !== 0 && <div>Total Visits: {views}</div>}
      </div>
    </footer>
  );
};

export default Footer;
