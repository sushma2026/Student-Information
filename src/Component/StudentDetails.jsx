import React, { useState } from 'react';
import StudentTable from './StudentTable';
import StudentInput from './StudentInput';

const initialData = () => ({
  name: '',
  age: '',
  gender: '',
  qualification: '',
});

const StudentDetails = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState(initialData());
  const [index,setIndex]= useState(null);

  const removeData = (index) => {
    setData((prevData) => prevData.filter((_, i) => i !== index));
    resetFormData();
  };

  const handleSubmit = (formData) => {
    if (index !== null) {
          const newData = [...data];
          newData[index] = formData;
          setData(newData);
          setIndex(null);
        }
  else {
          setData((prevData) => [...prevData, formData]);
        }
        resetFormData();
      };

  const toEdit = (row,index) => {
  setIndex(index);
    setFormData({ ...row });
  };

  const toDelete = (index) => {
   removeData(index);
   }

  const resetFormData = () => {
    setFormData(initialData());
  };

  return (
    <div className="container">
      <StudentInput handleSubmit={handleSubmit} formData={formData} />
      <StudentTable data={data} toEdit={toEdit} toDelete={toDelete} />
    </div>
  );
};

export default StudentDetails;
