import React from 'react';
import './index.scss';
import logo from '../../assets/logo.png';
import { RightComponent } from './RightComponent';
export const HomeScreen = () =>{
    return (
        <div className='home-container'>
            <div className='left-container'>
                <div className='items-container'>
                <img src={logo} alt="logo"/>
                <h1>AcciJob</h1>
                <h2>Code.Compile.Debug</h2>
                <button>
                    <span className='material-icons'>add</span>
                    <span>Create Playground</span></button>
                </div>
            </div>
            <RightComponent/>
        </div>
    );
}