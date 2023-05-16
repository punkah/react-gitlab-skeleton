import { Component } from 'react';
import './Page.scss';
import Footer from './page/Footer';
import Header from './page/Header';
import Timeline from './page/Timeline';

class Page extends Component {
  render() {
    return (
      <div className="main-page">
        <Header />
        <Timeline />
        <Footer />
      </div>
    );
  }
}

export default Page;
