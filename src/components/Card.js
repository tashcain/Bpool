import React from 'react';
import '../styles/card.css';


function Card(props) {
    return (
        <div>
            <div class="card card-1">
                <img style={{height:"92px", marginLeft: "62px"}} src = {props.img} alt="lll"/>
                <br/>
                <br/>
                <p className="cardp">
                    {props.data}
                </p>
            </div>
        </div>
    );
}

export default Card;