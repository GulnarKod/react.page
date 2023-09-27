import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props)=>{
    // let PostsElement= postsMap=((p)=><Post message ={p.message} Like count = {p.LikesCount}/>); 
    return (
        <div>
         <img src="https://pushinka.top/uploads/posts/2023-04/thumbs/1680708667_pushinka-top-p-psikhologiya-avatarok-v-sotsialnikh-setyak-37.jpg"></img> 
            <div>my Posts</div>
            <div>new posts</div>
            {/* {PostsElement} */}
        </div>
       );
    }


export default MyPosts;