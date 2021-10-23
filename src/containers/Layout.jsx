import React from 'react';
import Navbar from '@components/Navbar';
import { PropTypes } from 'prop-types'

const Layout = ({ children }) => (
  <div className="Layout">
    <Navbar />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.any
};


export default Layout;
