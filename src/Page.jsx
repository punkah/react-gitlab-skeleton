import React, { Component } from 'react';
import Header from './page/Header';
import './Page.scss';
import Timeline from './page/Timeline';
import Footer from './page/Footer';

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
