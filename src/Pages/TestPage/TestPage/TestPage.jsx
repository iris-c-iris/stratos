import React from 'react';
import './TestPage.css';
import { FaUser, FaLock } from "react-icons/fa";
import logo from './BlackLogo.png';
import { Link } from 'react-router-dom';
import SideBarManager from "../../../Components/SideBarManager/SideBarManager";
import SearchBar from "../../../Components/SearchBar/SearchBar";
import ActionIcon from "../../../Components/SearchBar/ActionIcon";
import Header from "../../../Components/Header/Header";
import SideBarEmployee from "../../../Components/SideBarEmployee/SideBarEmployee";

const TestPage = () => {
    return (
        <div className='test-page'>
            <SideBarEmployee/>
            <ActionIcon />
            <Header />

        </div>
    );
};

export default TestPage;
