import React from 'react';
import './MemberList.css';

const MemberList = ({ members }) => {
  return (
    <div>
      <h2>Member List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phoneNumber}</td>
              <td>{member.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
