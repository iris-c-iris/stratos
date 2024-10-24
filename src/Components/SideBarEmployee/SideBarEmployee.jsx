import React from 'react';
import './SideBarEmployee.css';
import dashboard from '../../Components/Assets/dashboard.png';
import plus from '../../Components/Assets/sidebarPlus.png';
import analytics from '../../Components/Assets/analytics.png';
import edit from '../../Components/Assets/edit.png';
import profile from '../../Components/Assets/sidebarProfile.png';
import logout from '../../Components/Assets/logout.png';



const menuItems = [
    { icon: dashboard, label: "Dashboard", active: true },
    { icon: plus, label: "Inventory" },
    { icon: analytics, label: "Analytics" },
    { icon: edit, label: "Edit Employees" },
    { icon: profile, label: "Profile" },
    { icon: logout, label: "Sign Out" },
];

const SideBarItem = ({ icon, label, active }) => (
    <div className={`sideBarItem ${active ? 'active' : ''}`}>
        <img src={icon} alt="" className="icon" />
        <span>{label}</span>
        {active && <div className="activeIndicator" />}
    </div>
);

const SideBarEmployee = () => (
    <>
        <div className="static-sidebar">
            <h1 className="logo">STRATOS <span className="logoLight">WMS</span></h1>
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ec5634e040b63f6f8981a585eae02f2c34e56a0aa7aaca99db59e4ed273ddb5?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03"
                alt=""
                className="decorativeImage"
            />
            <nav className="navigation">
                <div className="menuItems">
                    {menuItems.map((item, index) => (
                        <SideBarItem key={index} {...item} />
                    ))}
                </div>
            </nav>
        </div>
        <aside className="sidebar">
            <h1 className="logo">STRATOS <span className="logoLight">WMS</span></h1>
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ec5634e040b63f6f8981a585eae02f2c34e56a0aa7aaca99db59e4ed273ddb5?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03"
                alt=""
                className="decorativeImage"
            />
            <nav className="navigation">
                <div className="menuItems">
                    {menuItems.map((item, index) => (
                        <SideBarItem key={index} {...item} />
                    ))}
                </div>
            </nav>
        </aside>
    </>
);

export default SideBarEmployee;
