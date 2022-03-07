import React from 'react';
import '../styles/propComp.css';

const PropComp = (props) => {
    return (
        <div className="forProp">
            <div className="forPropContent">
                <strong>{props.post.id}. Это новый компонент {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
        </div>
    );
};

export default PropComp;