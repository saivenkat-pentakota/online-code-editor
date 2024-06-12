import React, { useContext } from "react";
import "./createPlaygroundModal.scss";
import { ModalContext } from "../ModalProviders";
import { PlaygroundContext } from "../PlaygroundProvider";

export const CreatePlaygrounModal = () => {
  const modalFeatures = useContext(ModalContext);
  const playgroundFeatures = useContext(PlaygroundContext);
  const closeModal = () => {
    modalFeatures.closeModal();
  };

  const onsubmitModal = (e) =>{
    e.preventDefault();
    const folderName = e.target.folderName.value;
    const fileName = e.target.fileName.value;
    const language = e.target.language.value;
    playgroundFeatures.createNewPlayground({
        folderName,
        fileName,
        language
    })
    closeModal();
  }

  return (
    <div className="modal-container">
      <form className="modal-body" onSubmit={onsubmitModal}>
        <span onClick={closeModal} className="material-icons close">
          close
        </span>
        <h1>Create New Playground</h1>
        <div className="item">
          <p>Enter folder name</p>
          <input name="folderName" required/>
        </div>
        <div className="item">
          <p>Enter card name</p>
          <input name="fileName" reqired/>
        </div>
        <div className="item">
          <select name="language" required>
            <option value="cpp">CPP</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
          <button type="submit">Create Playground</button>
        </div>
      </form>
    </div>
  );
};
