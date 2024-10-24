import React from 'react';
import './TrafficChart.css'; // Import the non-modular CSS

const TrafficChart = () => {
    const barData = [238, 87, 116, 70, 174, 75, 40];

    return (
        <section className="chartContainer">
            <h2 className="chartTitle">Clients Acquired</h2>
            <div className="chartContent">
                <div className="chartValue">
                    <span className="visitors">2.579</span>
                    <span className="label">New Clients</span>
                </div>
                <div className="barChart">
                    {barData.map((height, index) => (
                        <div key={index} className="barWrapper">
                            <div className="bar" style={{ height: `${height}px` }} />
                            <span className="barLabel">{index * 2}</span> {/* Adjust as per your labels */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrafficChart;
