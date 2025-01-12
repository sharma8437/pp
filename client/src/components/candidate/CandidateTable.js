import React from 'react'
import {  MoreVertical } from "lucide-react";
import CandidatePage from './CandidatePage';

const CandidateTable = () => {
    const candidates = [
        {
          id: "01",
          name: "Jane Copper",
          email: "jane.copper@example.com",
          phone: "(704) 555-0127",
          position: "Designer Intern",
          experience: "0",
        },
        {
          id: "02",
          name: "Janney Wilson",
          email: "janney.wilson@example.com",
          phone: "(252) 555-0126",
          position: "Senior Developer",
          experience: "1+",
        },
        {
          id: "03",
          name: "Guy Hawkins",
          email: "kenzi.lawson@example.com",
          phone: "(907) 555-0101",
          position: "Human Resource I...",
          experience: "10+",
        },
      ];
  return (
    <>
      <CandidatePage />
    
    <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Sr no.</th>
              <th>Candidates Name</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Position</th>
              <th>Status</th>
              <th>Experience</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>{candidate.id}</td>
                <td>{candidate.name}</td>
                <td>{candidate.email}</td>
                <td>{candidate.phone}</td>
                <td>{candidate.position}</td>
                <td>
                  <select name="status" className="select">
                    <option value="new">New</option>
                    <option value="processing">Processing</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
                <td>{candidate.experience}</td>
                <td>
                  <button className="action-button">
                    <MoreVertical className="icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CandidateTable