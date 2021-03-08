import React from 'react';
import '../styles/card.css';


function Card(props) {
    return (
        <div>
            <div class="card card-11">
                <img style={{height:"92px", marginLeft: "60px"}} src = {props.img} alt="lll"/>
                <br/>
                <br/>
                <p style={{fontSize : props.fs }} className="cardp">
                    {props.data}
                </p>
            </div>
        </div>
    );
}

export default Card;