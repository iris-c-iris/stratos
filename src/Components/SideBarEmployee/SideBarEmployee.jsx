import React from 'react';
import './SideBarEmployee.css'; // Import your CSS styles

const sideBarItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e3e413d63d190dc6915e2726f46c016713c6cda92647a533416afb83b098ab3?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03", text: "Dashboard", isActive: true },
    { icon: "https://cdn-icons-png.flaticon.com/512/1828/1828817.png", text: "Add Inventory" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc97c44cfeb05a903a20387c7e860c47eaa2e11261a216722a118f805a372cfa?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03", text: "Sign Out" },
];

const SideBarItem = ({ icon, text, isActive }) => (
    <div className={`SideBarItem ${isActive ? 'active' : ''}`}>
        <img src={icon} alt="" className="icon" />
        <span>{text}</span>
        {isActive && <div className="activeIndicator" />}
    </div>
);

const SideBarEmployee = () => (
    <nav className="SideBar">
        <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d3b1592bb00c609f93f01f9f2c7da1648ee0c7d73392debee4358cc7483e75f?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03"
            alt="Logo"
            className="logo"
        />
        <div className="menuItems">
            {sideBarItems.map((item, index) => (
                <SideBarItem key={index} {...item} />
            ))}
        </div>
    </nav>
);

export default SideBarEmployee;
