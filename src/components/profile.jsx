    import React, { useState } from 'react';
    import "./profile.css";

    export default function Profile(props) {
    const [follow, setFollow] = useState(props.follow);
    const [followStatus, setFollowStatus] = useState(true);

    const setBtn = () => {
        if (followStatus) {
        setFollow(follow + 1);
        } else {
        setFollow(follow - 1);
        }
        setFollowStatus(!followStatus);
    };

    return (
        <>
        <div className="profile">
            <img src={props.image} alt="Sadhiesh Instagram" />
            <div className="profile-details">
            <h1>{props.name}</h1>
            <button onClick={setBtn}>{followStatus ? "Follow" : "Unfollow"}</button>
            <div className="follow">
                <h1>Followers: {follow}</h1>
                <h1>Following: 345</h1>
                <h1>Posts: 45</h1>
            </div>
            </div>
        </div>
        </>
    );
    }
