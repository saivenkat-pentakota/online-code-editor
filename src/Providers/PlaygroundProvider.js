import React, { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";

export const PlaygroundContext = createContext();


const initialData = [
    {
        id: v4(),
        title: 'DSA',
        files: [
            {
                id: v4(),
                title: 'index',
                code: `cout<<"hello world";`,
                language: 'cpp',
            }
        ]
    },
    {
        id: v4(),
        title: 'Spring Boot',
        files: [
            {
                id: v4(),
                title: 'text',
                code: `console.log("hello frontend")`,
                language: 'javascript',
            }
        ]
    }
];

export const defaultCodes = {
    "cpp": `
    #include <iostream>
    using namespace std;
    int main(){
        cout<<"Hello World";
        return 0;
    }
    `,
    "javascript": `console.log("hello javascript")`,
    "python": `print("hello python")`,
    "java": `
    public class Main {
        public static void main(String[] args) {
            System.out.println("Hello World");
        }
    }`
};

// Utility function to validate JSON
const isValidJSON = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
};

export const PlaygroundProvider = ({ children }) => {
    const [folders, setFolders] = useState(() => {
        const localData = localStorage.getItem('data');
        if (localData && isValidJSON(localData)) {
            return JSON.parse(localData);
        }
        return initialData;
    });

    const createNewPlayground = (newPlayground) => {
        const { folderName, fileName, language } = newPlayground;
        const newFolders = [...folders];
        newFolders.push({
            id: v4(),
            title: folderName,
            files: [
                {
                    id: v4(),
                    title: fileName,
                    code: defaultCodes[language],
                    language
                }
            ]
        });
        localStorage.setItem('data', JSON.stringify(newFolders));
        setFolders(newFolders);
    };

    const createNewFolder = (folderName) => {
        const newFolder = {
            id: v4(),
            title: folderName,
            files: []
        };

        const allFolders = [...folders, newFolder];
        localStorage.setItem('data', JSON.stringify(allFolders));
        setFolders(allFolders);
    };

    const deleteFolder = (id) =>{
        const updatedFoldersList = folders.filter((folderItem) =>{
            return folderItem.id !== id;
        })

        localStorage.setItem('data',JSON.stringify(updatedFoldersList));
        setFolders(updatedFoldersList)

    }
    const editFolderTitle = (newFolderName,id) =>{
        const updatedFoldersList = folders.map((folderItem) =>{
            if(folderItem.id === id){
                folderItem.title = newFolderName
            }
            return folderItem;
        })
        localStorage.setItem('data',JSON.stringify(updatedFoldersList));
        setFolders(updatedFoldersList);
    }

    const deleteFile = (folderId,fileId)=>{
        const copiedFolders = [...folders]
        for(let i = 0;i<copiedFolders.length;i++){
            if(copiedFolders[i].id === folderId){
                const files = copiedFolders[i].files;
                copiedFolders[i].files = files.filter((file) =>{
                    return file.id !== fileId;
                })
                break;
            }
        }
        localStorage.setItem('data',JSON.stringify(copiedFolders));
        setFolders(copiedFolders);

    }

    const editFileTitle = (newFileName,folderId,fileId) =>{
        const copiedFolders = [...folders];
        for(let i = 0 ;i<copiedFolders.length;i++){
            if(folderId === copiedFolders[i].id){
                const files = copiedFolders[i].files
                for(let j = 0 ; j <files.length;j++){
                    if(files[i].id === fileId){
                        files[i].title = newFileName;
                        break;
                    }  
                }
                break;
            }
        }
        localStorage.setItem('data',JSON.stringify(copiedFolders));
        setFolders(copiedFolders);

    }

    const createPlayground = (folderId,file) =>{
        const copiedFolders = [...folders]
        for(let i = 0;i<copiedFolders.length;i++){
            if(copiedFolders[i].id === folderId){
                copiedFolders[i].files.push(file);
                break;
            }
        }

        localStorage.setItem('data',JSON.stringify(copiedFolders));
        setFolders(copiedFolders);
    }

    useEffect(() => {
        if (!localStorage.getItem('data')) {
            localStorage.setItem('data', JSON.stringify(folders));
        }
    }, [folders]); // Add 'folders' as a dependency

    const playgroundFeatures = {
        folders,
        createNewPlayground,
        createNewFolder,
        deleteFolder,
        editFolderTitle,
        editFileTitle,
        deleteFile ,
        createPlayground
    };

    return (
        <PlaygroundContext.Provider value={playgroundFeatures}>
            {children}
        </PlaygroundContext.Provider>
    );
};
