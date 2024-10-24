import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']; // Starts with Sunday to match iOS

    const getDaysInMonth = (year, month) => {
        const numDays = new Date(year, month + 1, 0).getDate();
        return Array.from({ length: numDays }, (_, i) => i + 1);
    };

    const getCalendarGrid = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDayOfWeek = new Date(year, month, 1).getDay();
        const daysInMonth = getDaysInMonth(year, month);

        // Padding for previous month's days
        const paddingDays = Array(firstDayOfWeek).fill('');

        return [...paddingDays, ...daysInMonth];
    };

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
    };

    const handleYearChange = (event) => {
        setCurrentDate(new Date(currentDate.setFullYear(event.target.value)));
    };

    const handleDateClick = (date) => {
        if (date) {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            setSelectedDate(new Date(year, month, date));
        }
    };

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const yearRange = Array.from({ length: 20 }, (_, i) => currentDate.getFullYear() - 10 + i); // Shows 10 years back and forward
    const calendarDates = getCalendarGrid();

    return (
        <section className="calendarContainer">
            <div className="calendarHeader">
                <button onClick={handlePrevMonth}>Prev</button>
                <div className="monthSelector">
                    <select
                        className="monthDropdown"
                        value={currentDate.getMonth()}
                        onChange={(e) => setCurrentDate(new Date(currentDate.setMonth(e.target.value)))}
                    >
                        {monthNames.map((month, index) => (
                            <option key={month} value={index}>{month}</option>
                        ))}
                    </select>
                    <select
                        className="yearDropdown"
                        value={currentDate.getFullYear()}
                        onChange={handleYearChange}
                    >
                        {yearRange.map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <button onClick={handleNextMonth}>Next</button>
            </div>
            <div className="calendarGrid">
                {days.map(day => (
                    <div key={day} className="dayLabel">{day}</div>
                ))}
                {calendarDates.map((date, index) => (
                    <div
                        key={index}
                        className={`dateCell ${(selectedDate && new Date(currentDate.getFullYear(), currentDate.getMonth(), date).getTime() === selectedDate.getTime()) ? 'active' : ''}`}
                        onClick={() => handleDateClick(date)}
                    >
                        {date}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Calendar;
