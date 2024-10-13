import React from 'react';
import './TestPage.css';
import SideBarEmployee from "../../../Components/SideBarEmployee/SideBarEmployee";
import Header from "../../../Components/Header/Header";
import UploadWidget from "../../../Components/UploadWidget/UploadWidget";
import ComplexTable from "../../../Components/InOutTable/ComplexTable";
import TaskCounter from "../../../Components/cardWidgets/TaskCounter";
import LastScanned from "../../../Components/cardWidgets/LastScanned";

const TestPage = () => {
    return (
        <div className='test-page'>
            <SideBarEmployee />
            <div className='test-content-container'>
                <Header />
                <div className='widget-container'>
                    <UploadWidget />
                    <TaskCounter />
                    <LastScanned/>
                </div>
                <ComplexTable />
            </div>
        </div>
    );
};

export default TestPage;
