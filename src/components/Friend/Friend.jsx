import React from 'react';
import "./Friend.css";
import {Link} from "react-router-dom";

const Friend = ({friend}) => {
    const {id, name, email, phone} = friend;

    return (
        <div className="friend">
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <p><Link to={`/friend/${id}`}>Show Me Details</Link></p>
        </div>
    );
};

export default Friend;
