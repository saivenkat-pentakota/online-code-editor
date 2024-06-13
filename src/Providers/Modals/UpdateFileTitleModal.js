import React, { useContext } from "react";
import './createPlaygroundModal.scss'
import { ModalContext } from "../ModalProviders";
import { createFolderStyles } from "./CreateFolderModal";
import { PlaygroundContext } from "../PlaygroundProvider";


export const UpdateFileTitleModal = () =>{
    const {closeModal,modalPayload} = useContext(ModalContext);
    const{editFileTitle} = useContext(PlaygroundContext);

    const onSubmitModal = (e) =>{
        e.preventDefault();
        
        const fileName = e.target.fileName.value;
        editFileTitle(fileName,modalPayload.folderId,modalPayload.fileId);
        closeModal();



    }
    return <div className="modal-container">
        <form className="modal-body" onSubmit={onSubmitModal}>
            <span onClick={closeModal} className="material-icons close">close</span>
            <h1>Update Card Title</h1>
            <div style={createFolderStyles.inputContainer}>
          <input required name="fileName" style = {createFolderStyles.input} placeholder="Enter File Name" />
          <button type="submit" style = {createFolderStyles.btn}>Update File</button>
        </div>
        </form>
    </div>
}