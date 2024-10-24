import React from 'react';
import './ComplexTable.css';

const ComplexTable = () => {
    const tableData = [
        { name: "Client 1", status: "Approved", date: "18 Apr 2021", progress: 75 },
        { name: "Client 2", status: "Pending", date: "18 Apr 2021", progress: 25 },
        { name: "Client 3", status: "Denied", date: "20 May 2021", progress: 90 },
        { name: "Client 4", status: "Approved", date: "12 Jul 2021", progress: 50 }
    ];

    return (
        <section className="tableContainer">
            <h2 className="tableTitle">Client Overview</h2>
            <div className="tableWrapper"> {/* Wrapper to control overflow */}
                <table className="complexTable">
                    <thead>
                    <tr>
                        <th>NAME</th>
                        <th>STATUS</th>
                        <th>DATE</th>
                        <th>PROGRESS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.name}</td>
                            <td>
                                    <span className={`status ${row.status.toLowerCase()}`}>
                                        {row.status}
                                    </span>
                            </td>
                            <td>{row.date}</td>
                            <td>
                                <div className="progressBar">
                                    <div className="progressFill" style={{ width: `${row.progress}%` }} />
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ComplexTable;
