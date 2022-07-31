import axios from 'axios';
import { useEffect, useState } from 'react';

const Footer = () => {
  const [views, setviews] = useState(0);

  const increasePageView = () => {
    const v = sessionStorage.getItem('views');
    if (v) {
      setviews(parseInt(v));
      return;
    }

    axios({
      url: 'https://api.anayak.com.np/vcnt/?ID=typingguru_site',
      method: 'get',
    })
      .then((res) => {
        sessionStorage.setItem('views', res.data.message);
        setviews(res.data.message);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios({
      url: 'https://api.anayak.com.np/vcnt/?ID=typingguru_site_views',
      method: 'get',
    })
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => console.error(err));
  }, []);

  const isDev = process.env.NODE_ENV === 'development';

  useEffect(isDev ? () => {} : increasePageView, []);

  return (
    <footer className="flex justify-center w-full fixed bottom-0 font-ropa_sans text-md p-3">
      <div className="max-w-screen-xl w-full flex justify-between">
        <div className="flex gap-1">
          &copy; {new Date().getFullYear()}{' '}
          <a href="https://typing-guru.com" className="flex">
            Typing Guru
          </a>
        </div>
        {views !== 0 && <div>Total Visits: {views}</div>}
      </div>
    </footer>
  );
};

export default Footer;
