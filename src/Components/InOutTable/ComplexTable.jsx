import React from 'react';
import './ComplexTable.css';
import complete from '../Assets/complete.png';
import delayed from '../Assets/delayed.png';
import canceled from '../Assets/canceled.png';

const ComplexTable = () => {
    const tableData = [
        {
            name: 'BMR Suspension',
            status: {
                icon: complete,
                text: 'Completed'
            },
            date: '18 Oct 2024',
            progress: 100
        },
        {
            name: 'Nitrous Express',
            status: {
                icon: canceled,
                text: 'Canceled'
            },
            date: '18 Oct 2024',
            progress: 0
        },
        {
            name: 'Whiteline',
            status: {
                icon: delayed,
                text: 'Delayed'
            },
            date: '18 Oct 2024',
            progress: 40
        },
        {
            name: 'JEGS',
            status: {
                icon: complete,
                text: 'Completed'
            },
            date: '18 Oct 2024',
            progress: 100
        }
    ];

    const TableRow = ({ name, status, date, progress }) => {
        return (
            <div className="tableRow">
                <div className="tableColumn">
                    <div className="nameColumn">
                        <div>{name}</div>
                    </div>
                </div>
                <div className="tableColumn">
                    <div className="statusColumn">
                        <div className="statusItem">
                            <img loading="lazy" src={status.icon} alt="" className="statusIcon" />
                            <div>{status.text}</div>
                        </div>
                    </div>
                </div>
                <div className="tableColumn">
                    <div className="dateColumn">
                        <div>{date}</div>
                    </div>
                </div>
                <div className="tableColumn">
                    <div className="progressColumn">
                        <div className="progressBar">
                            <div className="progressFill" style={{ width: `${progress}%` }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="complexTable">
            <header className="title">
                <div className="titleWrapper">
                    <h2 className="title">Incoming</h2>
                    <div className="columnHeader">NAME</div>
                </div>
                <div className={`columnHeader statusHeader`}>STATUS</div>
                <div className={`columnHeader dateHeader`}>DATE</div>
                <div className="progressHeader">
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7514c31a46a0c7597c2d7d68e36dd4573029bd3e06e1a4331b1f3c796b33cd34?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03" alt="" className="progressIcon" />
                    <div className="columnHeader">PROGRESS</div>
                </div>
            </header>
            <hr className="separator" />
            <div className="tableContent">
                {tableData.map((row, index) => (
                    <TableRow key={index} {...row} />
                ))}
            </div>
        </section>
    );
};

export default ComplexTable;
