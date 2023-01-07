import "./style.css";
import React from 'react';


function Notice(props) {

    return (
        <div className='notice'>
                
                    <h1 className="titule-news">
                        {props.title}
                    </h1>

                    <p id="amountTextNews">{props.text}</p>

                    <div className="button"><button className="buttonAcess">Acessar</button></div>
                
        </div>
    );
}

export default Notice;