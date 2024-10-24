import React from 'react';
import Header from '../../Components/Header/Header'; // Import the Header component
import SideBarEmployee from '../../Components/SideBarEmployee/SideBarEmployee'; // Import the Sidebar component
import './InputInventory.css';


function InputInventory() {
    return (
        <div className="input-inventory-container">
            <Header />
            <div className="main-content">
                <SideBarEmployee />
                <div className="inventory-box">
                    <h1>Add Inventory</h1>
                    <div className="input-row">
                        <div className="input-box">
                            <input type="text" placeholder="Customer Name" />
                            <i className="icon"></i>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Date Recieved"/>
                            <i className="icon"></i>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Type of Cargo" />
                            <i className="icon"></i>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Cargo Size" />
                            <i className="icon"></i>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Cargo Amount"/>
                            <i className="icon"></i>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Cargo Weight"/>
                            <i className="icon>"></i>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Floor Location"/>
                            <i className="icon"></i>
                        </div>
                        <div className="description-box">
                            <textarea placeholder="Additional Information"></textarea>
                        </div>
                    </div>
                    <button type="submit">Update Inventory</button>
                </div>
            </div>
        </div>
    );
}

export default InputInventory;