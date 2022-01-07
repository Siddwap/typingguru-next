import Header from '@components/atoms/header';
import Footer from '@components/atoms/footer';
import CBody from '@components/atoms/cbody';

const CustomStories = () => {
  return (
    <CBody>
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
    </CBody>
  );
};

export default CustomStories;
