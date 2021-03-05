import React from 'react';
import Header from '../components/Header';
import Landbody from '../components/landbody';
import Home2 from '../components/home2';
import Home4 from '../components/home4';
import Home5 from '../components/home5';
import '../styles/landingpage.css';
import TestimonialSlider from '../components/TestimonialSlider';
import '../styles/home.css';
import Footer from '../components/footer';

function Home() {
    return (
        <div>
                 
           <div>
                <Header/>
           </div>
           <div className=" hiw land">
           <Landbody/>
           </div>
           <br/>
           <div style={{padding: "20px 0 20px 0"}}>
           <Home2/>
           </div>
           <br/>
           <div style={{padding: "20px 0 20px 0"}}>
           <Home4/>
           </div>
           <br/>
           <div className="bft" style={{padding: "20px 0 20px 0"}}>
           <Home5/>
           </div>
           <div className="test">
               <TestimonialSlider/>
           </div>
           <div style={{color : "white" ,background:"black", padding: "70px 0 80px 0 "}}>
                <Footer/>
           </div>
        </div>
    )
}

export default Home;