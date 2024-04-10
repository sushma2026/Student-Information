import React, { useState } from 'react';

const StudentTable = ({ data = [], toEdit, toDelete }) => {
 
  const [confirmation, setConfirmation]=useState(null);

  const confirmDelete= (index)=>{
    setConfirmation(index);
  };

  const handleDelete=()=>{
    if(confirmation!== null){
      toDelete(confirmation);
      setConfirmation(null);
    }
  };

  const close=()=>{
    setConfirmation(null);
  }

  return (
    <div align="center">
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Qualification</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.gender}</td>
              <td>{row.qualification}</td>
              <td>
                <button className='edit-button' onClick={() => toEdit(row,index)}>Edit</button>
                <button className='delete-button' onClick={() => confirmDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {confirmation !== null && (
        <div className="confirm">
          <div className="confirm-content">
            <p>{`Are you sure you want to delete ${data[confirmation].name} ?`}</p>
            <button  className='confirm-button' onClick={handleDelete}>Confirm</button>
            <button className='cancel-button' onClick={close}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentTable;
