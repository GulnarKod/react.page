import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
const DialogsItem =(props)=>{
    let path = "/messages/"+''+ props.id;
    return <div>
        <NavLink to={path}>{props.name}</NavLink>
        </div>
}
const Messages= (props)=>{
    return <div className={s.dialogs}>
        {props.message}
    </div>
}
let dialogsData=[
    {id:1, name:"Ivan" },
    {id:2, name:"Aleksander" },
    {id:3, name:"Valera" },
    {id:4, name:"Mariya" }

]
// let dialogsMessages = [{}]
const Dialogs=(props)=>{
    return(
        <div  className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name ={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name ={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name ={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsItem name ={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={s.message}>
               <Messages message="Hi"/>
               <Messages message="How are you"/>
              <Messages message="When we will meeting"/>
              <Messages message="dsasdasd"/>
            </div>
        </div>
    )
}
export default Dialogs