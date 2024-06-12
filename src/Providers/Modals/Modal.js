import React, { useContext } from "react";
import { ModalContext, modalConstants } from "../ModalProviders";
import { CreatePlaygrounModal } from "./CreatePlaygroundModal";

export const Modal =() =>{
    const modalFeatures = useContext(ModalContext);

    return <>
    {modalFeatures.activeModal === modalConstants.CREATE_PLAYGROUND && <CreatePlaygrounModal/>}
    </>
}