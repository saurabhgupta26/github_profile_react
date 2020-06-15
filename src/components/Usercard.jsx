import React from 'react';

function Usercard(props) {
    return (
        <div className= 'container'>
            <h2>{props.user.login}</h2>
            <img className="user_image" src={props.user.avatar_url} alt="img" />
            <h3>{props.user.bio}</h3>
            <h3>{props.user.location}</h3>
     </div>
    );
}
export default Usercard;