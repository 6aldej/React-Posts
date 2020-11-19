import React from 'react';
import notFound from '../../img/not_found.png'
import './post-alert.css';

const PostAlert = () => {


    return (
        <div className="post-alert">
            <img src={notFound} alt="not-found"/>
            <div className="alert-text">
                <h5>По Вашему запросу ничего не найдено!</h5>
                <h6>Попробуйте еще раз.</h6>
            </div>
        </div>
    )
}

export default PostAlert;