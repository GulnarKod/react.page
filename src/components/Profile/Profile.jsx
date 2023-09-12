import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div >
      <div>
        <img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUNFdBV-133BPHbJIXumWTrTa50eAm78JngA&usqp=CAU'></img>
      </div>
      <div>
        ava+description
      </div>
      <MyPosts/>
    </div>
  );
}
export default Profile;