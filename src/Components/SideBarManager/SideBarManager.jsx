import React from 'react';
import './SideBarManager.css'; // Import your CSS styles

const sideBarItems = [
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e3e413d63d190dc6915e2726f46c016713c6cda92647a533416afb83b098ab3?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03",
        text: "Dashboard",
        isActive: true,
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/77bcf2fec9134f9927bc6e8de8c525642686541ae5a67463a2aa5e4b97049f9e?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03",
        text: "Analyze",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3be20e8d1508572d5e62ec44ebb365ad4152d695c91f0d6e4845651410e440a8?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03",
        text: "Add Employee",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/549a61baa9da3d9cb2a986f1e6f005ac07a2a97a45f155c4692bb4497d4231b2?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03",
        text: "Placeholder",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/72b229d02f263f9d8d405fc2cb2139498e79fa480264650a2017f2e92978a35b?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03",
        text: "Profile",
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc97c44cfeb05a903a20387c7e860c47eaa2e11261a216722a118f805a372cfa?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03",
        text: "Sign Out",
    },
];

const SideBarItem = ({ icon, text, isActive }) => (
    <div className={`SideBarItem ${isActive ? 'active' : ''}`}>
        <img src={icon} alt="" className="icon" />
        <span>{text}</span>
        {isActive && <div className="activeIndicator" />}
    </div>
);

const SideBarManager = () => (
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

export default SideBarManager;