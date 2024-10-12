import React from 'react';
import './TestPage.css';
import SideBarEmployee from "../../../Components/SideBarEmployee/SideBarEmployee";
import ActionIcon from "../../../Components/SearchBar/ActionIcon";
import Header from "../../../Components/Header/Header";
import UploadWidget from "../../../Components/UploadWidget/UploadWidget";
import ComplexTable from "../../../Components/InOutTable/ComplexTable";

const TestPage = () => {
    return (
        <div className='test-page'>
            <div className='sidebar-container'>
                <SideBarEmployee />
            </div>
            <div className='test-content-container'>
                <ActionIcon />
                <Header />
                <div className='upload-container'>
                    <UploadWidget />
                </div>
                <div className='complex-table-container'>
                    <ComplexTable />
                </div>
            </div>
        </div>
    );
};

export default TestPage;
