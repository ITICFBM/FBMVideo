import React from 'react';
import Header from './Header';
import Footer from './Footer';
/** Hacemos Un componente children */
const Layout = ( {children} ) =>(

  <div className="App">
    {children}
    <Footer />

  </div>
);

export default  Layout;
