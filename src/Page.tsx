import './Page.scss';
import Footer from './page/Footer';
import Header from './page/Header';
import Timeline from './page/Timeline';

const Page = () => {
  return (
    <div className="main-page">
      <Header />
      <Timeline />
      <Footer />
    </div>
  );
};

export default Page;
