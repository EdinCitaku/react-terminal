import '../App.css';
import React from 'react';

export function Output(l: string[]){
    const items = l.map(item => <li><span className="user">user@Portfolio: </span><span className="input">{item}</span></li>)
    return <div className="output"> {items}
    </div>;
}