import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = ()=>{
    return (
        <div>
            <div>my Posts</div>
            <div>new posts</div>
            <Post message ='otlicnaya set' likesCount ='2'/>
            <Post message = 'xorowaya stranica' likesCount ='15'/>
            <Post/>
            <Post/>
            <Post/>
        </div>
       );
    }


export default MyPosts;