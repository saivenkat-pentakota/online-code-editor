import React, { useContext } from "react";
import "./index.scss";
import logo from "../../../assets/logo.png";
import { PlaygroundContext } from "../../../Providers/PlaygroundProvider";
import { ModalContext, modalConstants } from "../../../Providers/ModalProviders";
import { useNavigate } from "react-router-dom";

const Folder = ({folderTitle,cards,folderId}) =>{

  const {deleteFolder,deleteFile} = useContext(PlaygroundContext);
  const{openModal,setModalPayload} = useContext(ModalContext);
  const navigate = useNavigate();


  const onDeleteFolder = () =>{
    deleteFolder(folderId);
  }

  const onEditFolderTitle = () =>{
    setModalPayload(folderId);
    openModal(modalConstants.UPDATE_FOLDER_TITLE);

  }

  const openCreateCardModal = () =>{
    setModalPayload(folderId);
    openModal(modalConstants.CREATE_CARD)
  }
  return  <div className="folder-container">
  <div className="folder-header">
    <div className="folder-header-item">
      <span className="material-icons" style={{ color: "#FFCA29" }}>
        folder
      </span>
      <span>{folderTitle}</span>
    </div>
    <div className="folder-header-item">
      <span className="material-icons" onClick={onDeleteFolder}>delete</span>
      <span className="material-icons" onClick={onEditFolderTitle}>edit</span>
      <button onClick={openCreateCardModal}>
        <span className="material-icons">add</span>
        <span>New Playground</span>
      </button>
    </div>
  </div>
  <div className="cards-container">
    {
      cards?.map((file,index) =>{
        const onEditFile = () =>{
          setModalPayload({fileId:file.id,folderId:folderId})
          openModal(modalConstants.UPDATE_FILE_TITLE);

        }

        const onDeleteFile = () =>{
            deleteFile(folderId,file.id)
        }

        const navigateToPlaygroundScreen = () =>{
          navigate(`/playground/${file.id}/${folderId}`)


        }
        return(
          <div className="card" key={index} onClick={navigateToPlaygroundScreen}>
        <img src={logo} alt="logo" />
        <div className="title-container">
          <span>{file?.title}</span>
          <span>Language:{file?.language}</span>
        </div>
      <div style={{display:"flex",gap:"10px"}}>
        <span className="material-icons" onClick={onDeleteFile}>delete</span>
        <span className="material-icons" onClick={onEditFile}>edit</span>
      </div>
    </div>
        );
      })
    }
  </div>
</div>
}

 

export const RightComponent = () => {
  const {folders} = useContext(PlaygroundContext);
  const modalFeatures = useContext(ModalContext);

  const openCreateNewFolderModal = () =>{
    modalFeatures.openModal(modalConstants.CREATE_FOLDER);

  }
  return (
    <div className="right-container">
      <div className="header">
        <div className="title">
          <span>My</span> Playground
        </div>
        <button className="add-folder" onClick={openCreateNewFolderModal}>
          <span className="material-icons">add</span>
          <span>New Folder</span>
        </button>
      </div>
      {
        folders?.map((folder,index) =>{
          return <Folder folderTitle={folder?.title} cards={folder?.files} key = {folder.id} folderId={folder.id}/>
        })
      }
     
    </div>
  );
};
