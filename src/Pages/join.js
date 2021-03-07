import React, {useEffect} from  'react';
import Joinheader from '../components/joinHeader';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../styles/join.css';
import Footer from '../components/footer';
import Joinvideo from '../components/joinvideo';
import Poolcards from '../components/join2';


function Join(){
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []); 
    return (
        <div>
            <Joinheader/>
            <Joinvideo/>

            <Poolcards/>
            <div style={{color : "white" ,background:"black", padding: "70px 0 80px 0 "}}>
                <Footer/>
           </div>

        </div>
    );
}

export default Join;