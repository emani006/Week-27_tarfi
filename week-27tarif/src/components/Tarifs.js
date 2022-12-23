import React from 'react';
import Tarifcard from './Tarifcard';
//import "./styles/mainStyle.scss";
//import "./tstyle.css";

function Tarifs(props) {
    const note = 'Объем включенного трафика не ограничен';
    
    return (
        <Tarifcard>
            <div className='top'>{props.name}</div>
            <div className='middle'>
                <div className='rub'>руб. </div>
                <span className='price'>{props.price}</span><span className='monthly'> /мес.</span>
            </div>
            <div><span>до </span>{props.speed}<span> Мбит/сек</span></div>
            <div className='note'>{note}</div>
        </Tarifcard>
        );
    }
    
    export default Tarifs;  