import React, { useContext } from 'react';
import './index.scss';
import logo from '../../assets/logo.png';
import { Modal } from '../../Providers/Modals/Modal';
import { RightComponent } from './RightComponent';
import { ModalContext, modalConstants } from '../../Providers/ModalProviders';
export const HomeScreen = () =>{
    const modalFeatures = useContext(ModalContext);
    const openCreatePlaygroundModal = () =>{
        modalFeatures.openModal(modalConstants.CREATE_PLAYGROUND);

    };
    return (
        <div className='home-container'>
            <div className='left-container'>
                <div className='items-container'>
                <img src={logo} alt="logo"/>
                <h1>AcciJob</h1>
                <h2>Code.Compile.Debug</h2>
                <button onClick={openCreatePlaygroundModal}>
                    <span className='material-icons'>add</span>
                    <span>Create Playground</span></button>
                </div>
            </div>
            <RightComponent/>
            <Modal/>
        </div>
    );
}