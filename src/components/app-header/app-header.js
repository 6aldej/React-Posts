import React from 'react';
import logo from '../../img/bird.png';
import photo from '../../img/penguin.svg';
import likes from '../../img/like.svg';
import background from '../../img/background.jpg'
import './app-header.css';

const AppHeader = ({liked, allPosts}) => {

    const sklonenie = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];

    const note = sklonenie(allPosts, ['запись', 'записи', 'записей'])

    return (
        <div className="app-header">
            <div className="profile-about">
                <div className="profile-information">
                    <div className="profile">
                        <img className="photo" src={photo} alt="profile_photo"/><p>@6aldej</p>
                    </div>
                    <h2>{allPosts} {note} | <img src={likes} alt='likes'/> <span>{liked}</span></h2>
                    <img className="logo" src={logo} alt='logo'/>
                </div>
            </div>
            <img className="background-profile" src={background} alt="background-profile"/>
        </div>
    )
}

export default AppHeader;