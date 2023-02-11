import React, { useState } from 'react';
import MemberList from './MemberList';
import './FitnessClubRegistration.css';



const FitnessClubRegistration = () => {
  const [members, setMembers] = useState([]);
  const [showMemberList, setShowMemberList] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const handleChange = (event) => {
    setNewMember({
      ...newMember,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMembers([...members, newMember]);
    setNewMember({
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
    });
  };

  const handleViewMemberList = () => {
    setShowMemberList(true);
  };

  return (
    <div>
      {!showMemberList ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newMember.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={newMember.email}
            onChange={handleChange}
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={newMember.phoneNumber}
            onChange={handleChange}
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={newMember.address}
            onChange={handleChange}
          />

          <button type="submit">Add Member</button>
          <button type="button" onClick={handleViewMemberList}>
            View Member List
          </button>
        </form>
      ) : (
        <MemberList members={members} />
      )}
    </div>
  );
};

export default FitnessClubRegistration;
