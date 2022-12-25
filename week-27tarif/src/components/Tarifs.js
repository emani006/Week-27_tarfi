import React from 'react';
import Tarifcard from './Tarifcard';
//import styled from 'styled-components';

function Tarifs(props) {
    const note = 'Объем включенного трафика не ограничен';

    return (
        <Tarifcard>
            <div className='top' style={{backgroundColor: props.color}}>{props.name}</div>
            <div className='middle' style={{backgroundColor: props.color}}>
                <div className='rub'>руб. </div>
                <span className='price'>{props.price}</span><span className='monthly'> /мес.</span>
            </div>
            <div className='bottom'><span>до </span>{props.speed}<span> Мбит/сек</span></div>
            <div className='note'>{note}</div>
        </Tarifcard>
        );
}    
    export default Tarifs;  