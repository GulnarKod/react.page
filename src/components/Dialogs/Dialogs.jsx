import React from 'react';
import s from './Dialogs.module.css';
const Dialogs=(props)=>{
    return(
        <div  className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    Ivan
                </div>
                <div className={s.dialog}>
                    Aleksander
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
                <div className={s.dialog}>
                    Mariya
                </div>
                <div className={s.dialog}>
                    Dmitry
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>what is yor name</div>
                <div className={s.message}>You profile is cool</div>
            </div>
        </div>
    )
}
export default Dialogs