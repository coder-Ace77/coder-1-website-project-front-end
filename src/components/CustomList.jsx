// CustomList.js

import React from 'react';
import './css/CustomList.css';

const CustomList = ({ items }) => {
    return (
        <ul className="custom-list">
            {items.map((item, index) => (
                <li key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default CustomList;
