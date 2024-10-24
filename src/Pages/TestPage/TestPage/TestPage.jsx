import React from 'react';
import './TestPage.css';
import SideBarEmployee from "../../../Components/SideBarEmployee/SideBarEmployee";
import Header from "../../../Components/Header/Header";
import ComplexTable from "../../../Components/InOutTable/ComplexTable";

const TestPage = () => {
    return (
        <div className='test-page'>
            <SideBarEmployee />
            <div className='test-content-container'>
                <Header />
                <div className='widget-container'>

                </div>
                <ComplexTable />
            </div>
        </div>
    );
};

export default TestPage;
