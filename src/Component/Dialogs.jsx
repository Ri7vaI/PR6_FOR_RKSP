import React from 'react';
import st from '../styles/Dialogs.module.css'


const Dialogs = () => {
    return (
        <div className={st.dialogs}>
            <div className={st.dialogsItems}>
                <div className={st.dialog}>

                </div>
            </div>
            <div className={st.messages}>

            </div>
        </div>
    );
};

export default Dialogs;