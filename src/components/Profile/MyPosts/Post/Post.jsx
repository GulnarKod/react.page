import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://pushinka.top/uploads/posts/2023-04/thumbs/1680708667_pushinka-top-p-psikhologiya-avatarok-v-sotsialnikh-setyak-37.jpg"></img>
                {props.message}
                <div>
                    <span>Like {props.likesCount} </span> 
                    <span>Dislike</span> 
                </div>
            </div>
        </div>
    );}
export default Post;