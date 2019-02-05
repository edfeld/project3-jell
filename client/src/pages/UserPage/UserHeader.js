import React from 'react';
import "./userHead.css";
import Badge from '../../components/Badges'

const UserHeader = props => {
    const badges = props.userData.badges.split(':');
    return(
    <header className="userHead">
        <div className="userTron " style={{padding: '0', backgroundColor:'#201106cc '}}>
        <div className="userName">
            <span>User Name:</span>
            <h1 className="display-4">{props.userData.username}</h1>
            <span>User Type:</span>
            <h6 className="display-4">{props.userData.userType}</h6>
            <span>User Badges:</span>
            <h6 className="display-4">{badges.map(badge => (
                            <Badge badge={badge}></Badge>
                        ))}</h6>
        </div>
            <div className="aboutMe">
                <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </p>
            </div>
        </div>
    </header>
    )
};

export default UserHeader;