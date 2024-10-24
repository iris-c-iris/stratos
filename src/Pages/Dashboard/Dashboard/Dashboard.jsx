import React from 'react';
import './Dashboard.css'; // Import the non-modular CSS
import plus from '../../../Components/Assets/plus.png';
import plusBlue from '../../../Components/Assets/plusBlue.png';
import cash from '../../../Components/Assets/cash.png';
import box from '../../../Components/Assets/box.png';
import alert from '../../../Components/Assets/alert.png';
import Sidebar from '../../../Components/SideBarManager/SideBarManager';
import Header from '../../../Components/Header/Header';
import SmallCard from '../../../Components/SmallCard/SmallCard';
import ComplexTable from '../../../Components/InOutTable/ComplexTable';
import TrafficChart from '../../../Components/TrafficChart/TrafficChart';
import PieChart from '../../../Components/PieChart/PieChart';
import TaskList from '../../../Components/TaskList/TaskList';
import Calendar from '../../../Components/Calendar/Calendar';
import CourseCta from '../../../Components/CourseCta/CourseCta';
import TeamMembers from '../../../Components/TeamMembers/TeamMembers';
import SafetyCard from '../../../Components/SafetyCard/SafetyCard';
import CashbackCard from '../../../Components/CashbackCard/CashbackCard';

const Dashboard = () => {
    const smallCardData = [
        {
            title: "Add Inventory",
            icon: plusBlue
        },
        {
            title: "Credits Today",
            value: "$4,283.72",
            icon: cash
        },
        {
            title: "In Today",
            value: "23",
            icon: box
        },
        {
            title: "Delayed In",
            value: "2",
            icon: alert
        }
    ];

    return (
        <main className="dashboard">
            <Sidebar/>
            <div className="mainContent">
                <Header/>
                <section className="cardGrid">
                    {smallCardData.map((card, index) => (
                        <SmallCard key={index} {...card} />
                    ))}
                </section>
                <section className="chartsSection">
                </section>
                <section className="tablesAndCharts">
                    <ComplexTable/>
                    <TrafficChart/>
                    <PieChart/>
                </section>
                <section className="bottomSection">
                    <TaskList/>
                    <Calendar/>
                    <CourseCta/>
                    <TeamMembers/>
                    <SafetyCard/>
                    <CashbackCard/>
                </section>
            </div>
        </main>
    );
};

export default Dashboard;
