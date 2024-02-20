import React from 'react';
import '../Components/Scroll.css';

const Scroll = (props) => {
    return <div className = "scrollBar">
    {props.children}
    </div>
};

export default Scroll;