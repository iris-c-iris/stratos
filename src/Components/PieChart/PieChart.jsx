import React from 'react';
import './PieChart.css';

const PieChart = () => {
    return (
        <section className="chartContainer">
            <div className="chartHeader">
                <h2 className="chartTitle">Statistics</h2>
                <div className="chartPeriod">
                    <span>Weekly</span>
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f9040d648ea8871e5013164d6f6d71c3ca39be7d852da4f4db97d668df6862f?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03" alt="" />
                </div>
            </div>
            {/*<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/076d204ca46e9a6ff9382876d715b4ae047bbb477f28f692aed2b0fe3e40f143?placeholderIfAbsent=true&apiKey=d7229136ad094bbf8efa03382e544f03" alt="Pie Chart" className="chartImage" />*/}
            <div className="chartLegend">
                <div className="legendItem">
                    <div className="legendColor" style={{backgroundColor: '#4318ff'}} />
                    <div className="legendText">
                        <span className="legendLabel">Item</span>
                        <span className="legendValue">42%</span>
                    </div>
                </div>
                <div className="legendItem">
                    <div className="legendColor" style={{backgroundColor: '#6ad2ff'}} />
                    <div className="legendText">
                        <span className="legendLabel">Item</span>
                        <span className="legendValue">58%</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PieChart;
