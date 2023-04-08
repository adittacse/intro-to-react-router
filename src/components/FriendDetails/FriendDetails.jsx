import React from 'react';
import {useLoaderData} from "react-router-dom";

const FriendDetails = () => {
    const friend = useLoaderData();

    return (
        <div>
            <h3>Everything about this person is here</h3>
            <h4>{friend.name}</h4>
            <p>{friend.username}</p>
            <p>{friend.phone}</p>
            <p>{friend.email}</p>
        </div>
    );
};

export default FriendDetails;
