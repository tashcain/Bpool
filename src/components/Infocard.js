import React from 'react';
import '../styles/card.css';
import '../styles/home.css';

function Infocard(props) {
    return (
        <div>
            <div class="card card-11">
                <span className="infoheading">{props.head}</span>
                <br/>
                <span>
                    {
                        props.data.map((item, i) => (
                            <ul >
                                <li className="hunderlist">{item}</li>
                            </ul>
                        ))
                    }
                </span>
            </div>
        </div>
    );
}

export default Infocard;