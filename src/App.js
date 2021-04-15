import './App.css';
import React, {useState} from 'react';
import {useUserStore} from "./UserContext";
import {observer} from "mobx-react";
import Modal from "./Modal";

const App = observer(() => {
    const userStore = useUserStore();
    const [error, setError] = useState(null);

    const handleChangeFirstName = (e) => {
        setError(null);
        userStore.setFirstName(e.target.value)
    };
    const handleChangeLastName = (e) => {
        setError(null);
        userStore.setLastName(e.target.value)
    };

    const handleClickReady = (e) => {
        e.preventDefault();
        const error = userStore.validate();
        if (!error) {
            userStore.showModal();
        }

        setError(error)
    };


    return (
        <form className='container' onSubmit={handleClickReady}>
            <input className='input-group' type="text" placeholder="Имя" value={userStore.firstName}
                   onChange={handleChangeFirstName}/>

            <input className='input-group' type="text" placeholder="Фамилия" value={userStore.lastName}
                   onChange={handleChangeLastName}/>
            <button className='button-primary'>Готово</button>
            {
                error && (
                    <span className='error'>
                    {
                        error
                    }
                    </span>
                )
            }
            <Modal/>
        </form>
    );
});

export default App;
