import React from 'react';
import PostListItem from '../post-list-item/';
import PostAlert from '../post-alert';
import { ListGroup } from 'reactstrap';

import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item => {
        const {id, ...itemProps} = item;
        
        if (id === 'ERROR_MESSAGE_404') {
            return (
                <li key={'errorMessage'} className="list-group-item">
                    <PostAlert/>
                </li>
            )
        } else {
            return (
                <li key={id} className="list-group-item">
                    <PostListItem 
                        {...itemProps}
                        onDelete={() => onDelete(id)}
                        onToggleLiked={() => onToggleLiked(id)}
                        onToggleImportant={() => onToggleImportant(id)}/>
                </li>
            )
        }

    }))

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;