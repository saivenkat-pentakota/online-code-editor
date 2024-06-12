import React, { createContext, useState } from "react";

export const ModalContext = createContext();

export const modalConstants = {
    CREATE_PLAYGROUND:'CREATE_PLAYGROUND'
}

export const ModalProvider = ({children}) =>{
    const [modalType,setModalType] = useState(null);   
    const closeModal = ()=>{
        setModalType(null);
    } 
    const modalFeatres = {
        openModal:setModalType,
        closeModal,
        activeModal:modalType
    }
    return(
        <ModalContext.Provider value={modalFeatres}>
            {children}
        </ModalContext.Provider>
    );
}