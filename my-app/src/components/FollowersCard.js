import React from 'react';

class FollowersCard extends React.Component {
    constructor() {
        super();
        this.state = {
            followers: []
        }
    }

    //https://api.github.com/users/adriangarcia5/followers

    render() {
        return(
            <div>
                This is from the FollowersCard.js
            </div>
        )
    }
}

export default FollowersCard;