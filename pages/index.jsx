import Card from '@components/atoms/card';
import {
  FaBookOpen,
  FaRandom,
  FaUserGraduate,
  FaBook,
  FaRecycle,
} from 'react-icons/fa';
import Link from 'next/link';
import Footer from '@components/atoms/footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-[1080px] bg-gray-50">
      <div className="flex justify-center">
        <div className="header flex gap-6 w-full max-w-screen-xl p-3 py-6">
          <div className="flex">
            <Link href="/">
              <h1 className="text-primary-900 text-2xl font-resique cursor-pointer select-none">
                Typing Guru
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center pb-32">
        <div className="max-w-screen-xl w-full">
          <div className="flex justify-center items-center w-full h-full">
            <div className="grid gap-12 grid-cols-3">
              {[
                {
                  link: '/lessons',
                  label: 'Lessons',
                  icon: <FaUserGraduate />,
                },
                { link: '/stories', label: 'Stories', icon: <FaBookOpen /> },
                {
                  link: '/custom-stories',
                  label: 'Custom Stories',
                  icon: <FaBook />,
                },
                {
                  link: '/random-type',
                  label: 'Random Type',
                  icon: <FaRandom />,
                },

                {
                  link: '/issues',
                  label: 'Issue/Recommendation',
                  icon: <FaRecycle />,
                },
              ].map(({ link, label, icon }) => {
                return (
                  <Link key={link} href={link}>
                    <a>
                      <Card className="items-center justify-center min-w-[16rem] py-8">
                        <div className="text-6xl">{icon}</div>
                        <span className="font-redressed text-4xl">{label}</span>
                      </Card>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Home.SSR = true;

export default Home;
