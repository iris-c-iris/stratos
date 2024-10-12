import React from 'react';
import './ComplexTable.css'; // Import your external CSS file

const ComplexTable = () => {
    const tableData = [
        {
            name: 'BMR Suspension',
            status: {
                icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e76cc6995c13180eeda30a71572187406a23d49be477beb26210a166d7599da4?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03',
                text: 'Completed'
            },
            date: '18 Oct 2024',
            progress: 100
        },
        {
            name: 'Nitrous Express',
            status: {
                icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f60d7eabf7dbe8dff73942ad40f1c23930279a0680e23fa15ee2717635c095a4?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03',
                text: 'Canceled'
            },
            date: '18 Oct 2024',
            progress: 0
        },
        {
            name: 'Whiteline Performance',
            status: {
                icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ee39686d29a32db9681e7273c4db313c97067e139ce38411f93fd6adfe460464?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03',
                text: 'Delayed'
            },
            date: '18 Oct 2024',
            progress: 40
        },
        {
            name: 'JEGS High Performance',
            status: {
                icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1744cbd090dc4fe27f862e252b3e84a3ee9a32553b9c12794d7300e59217c567?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03',
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
