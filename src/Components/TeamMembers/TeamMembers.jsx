import React from 'react';
import './TeamMembers.css'; // Import the non-modular CSS
import account from '../../Components/Assets/account.png';


const TeamMembers = () => {
    const members = [
        { name: "Kimothy Doe", role: "Development", avatar: account },
        { name: "Wendy Nesday", role: "Intake", avatar: account },
        { name: "Timantha Epiphany", role: "Intake", avatar: account }
    ];

    return (
        <section className="teamContainer">
            <div className="teamHeader">
                <h2 className="teamTitle">My Team</h2>
            </div>
            {members.map((member, index) => (
                <div key={index} className="memberCard">
                    <div className="memberInfo">
                        <img src={member.avatar} alt={member.name} className="memberAvatar" />
                        <div>
                            <h3 className="memberName">{member.name}</h3>
                            <p className="memberRole">{member.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default TeamMembers;
