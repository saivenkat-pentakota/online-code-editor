import React from "react";
import './EditorContainer.scss';
export const EditorContainer = () =>{
    return <div className="root-editor-container">
        
        <div className="editor-header">
            <div className="editor-left-container">
                <b className="title">{"title of the card"}</b>
                <span className="material-icons">edit</span>
                <button>save code</button>
            </div>
            <div className="editor-right-container">
                <select>
                    <option value="cpp">CPP</option>
                    <option value="javascript">javascript</option>
                    <option value="java">java</option>
                    <option value="python">python</option>
                </select>
                <select>
                    <option value='vs-dark'>vs-dark</option>
                    <option value='vs-light'>vs-light</option>
                </select>
            </div>
        </div>
        <div className="editor-body">Editor Body</div>
        <div className="editor-footer">
            <button>
                <span></span>
            </button>
            <label htmlFor="file" >Import code</label>
            <input type="file" id="import-code" style={{display:'none'}}/>
            <button>Export Code</button>
            <button>Run Code</button>
        </div>
    </div>
}