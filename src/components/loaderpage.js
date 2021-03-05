import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import Img from '../asset/loop.svg';

function LoaderPage() {
    let history = useHistory();

    useEffect(() => {
        setTimeout(() => {
           history.push('/home');
         }, 3000);
       },[]);

    return (
        <div>
            <img style={{padding: "17% 0% 0% 42%"}} src={Img} alt ="loopload"/>
        </div>
    );
}

export default LoaderPage;