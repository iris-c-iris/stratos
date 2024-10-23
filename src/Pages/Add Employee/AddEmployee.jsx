import React from 'react';
import './AddEmployee.css';
import Header from '../../Components/Header/Header'; // Import the Header component
import SideBarEmployee from '../../Components/SideBarEmployee/SideBarEmployee'; // Import the Sidebar component

function AddEmployee() {
    return (
        <div className="add-employee-container">
            <Header />
            <div className="main-content">
                <SideBarEmployee />
                {/* Employee Form */}
                <div className="Employee-box">
                    <h1>Add Employee</h1>
                    <div className="input-row">
                        <div className="input-box">
                            <input type="text" placeholder="First Name" />
                            <i className="icon"></i>
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Last Name" />
                            <i className="icon"></i>
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Employee number" />
                            <i className="icon"></i>
                        </div>
                    </div>
                    <div className="permissions-section">
                        <h3>Permissions:</h3>
                        <div className="permissions-group">
                            <label>Admin:
                                <input type="radio" name="role" value="Admin" />
                            </label>
                            <label>User:
                                <input type="radio" name="role" value="User" />
                            </label>
                            <label>Read-Only:
                                <input type="radio" name="role" value="ReadOnly" />
                            </label>
                        </div>
                    </div>
                    <button type="submit">Add Employee</button>
                </div>
            </div>
        </div>
    );
}

export default AddEmployee;
