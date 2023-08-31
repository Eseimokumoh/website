import React from 'react';
import Banner from './Banner';
import Products from './Products';
import Header from './Header';
import Footer from './Footer';


function Home() {
  return (
    <div>
     <Header/>
     <Banner/>
     <Products/>
     <Footer />
    </div>
  )
}

export default Home;