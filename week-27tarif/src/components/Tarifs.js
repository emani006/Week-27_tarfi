import React from 'react';
//import "./styles/mainStyle.css";
import "./tstyle.css";

function Tarifs(props) {
    const note = 'Объем включенного трафика не ограничен';

    return (
        <div className='tarifCard'>
            <div className='top'><span>{props.name}</span></div>
            <div><div className='rub'>руб. </div><span className='price'>{props.price}</span><span className='monthly'> /мес.</span></div>
            <div><span>до </span>{props.speed}<span> Мбит/сек</span></div>
            <div className='note'>{note}</div>
        </div>
        );
    }
    
    export default Tarifs;  