import React from 'react';
import {observer} from "mobx-react";
import {useUserStore} from "./UserContext";
import './modal.css';

const Modal = observer(() => {
    const userStore = useUserStore();

    if (!userStore.show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3 className="modal-title">Ваши данные</h3>
                        <a title="Close" onClick={userStore.hideModal} className="close">×</a>
                    </div>
                    <div className="modal-body">
                        Здравствуйте,&nbsp;{userStore.firstName}&nbsp;{userStore.lastName}!
                    </div>
                </div>
            </div>
        </div>
    )
});


export default Modal;