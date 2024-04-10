import React, { useState, useEffect } from 'react';

const initialData = () => ({
  name: '',
  age: '',
  gender: '',
  qualification: '',
  errors: {},
});

const StudentInput = ({ formData, handleSubmit }) => {
  const [studentInfo, setStudentInfo] = useState(initialData());

  useEffect(() => {
    if (formData) {
      setStudentInfo({ ...formData, errors: {} });
    } else {
      setStudentInfo(initialData());
    }
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;

    if (!studentInfo.name) {
      formIsValid = false;
      errors['name'] = 'Cannot be empty';
    }

    if (!studentInfo.age) {
      formIsValid = false;
      errors['age'] = 'Cannot be empty';
    }
    else if(isNaN(studentInfo.age)||studentInfo.age<1|| studentInfo.age>100){
    formIsValid=false;
    errors['age']='Invalid age';
    }

    if (!studentInfo.gender) {
      formIsValid = false;
      errors['gender'] = 'Cannot be empty';
    }

    if (!studentInfo.qualification) {
      formIsValid = false;
      errors['qualification'] = 'Cannot be empty';
    }

    setStudentInfo((prev) => ({ ...prev, errors }));

    return formIsValid;
  };

  const submitForm = () => {
    if (handleValidation()) {
      handleSubmit(studentInfo);
      setStudentInfo(initialData());
    } else {
      console.log('Form validation failed. Please check the fields.');
    }
  };

  const resetForm = () => {
    setStudentInfo(initialData());
  };

  return (
    <div className='form'>
      <form className='form1'>
        <label>Name : </label>
        <input type="text" name="name" value={studentInfo.name} onChange={handleChange} />

        <label>Age :</label>
        <input type="number" name="age" value={studentInfo.age} onChange={handleChange} />

        <label>Gender :</label>
        <input
          type="radio"
          name="gender"
          value="M"
          checked={studentInfo.gender === 'M'}
          onChange={handleChange}
        />
        <span>Male</span>
        &nbsp;&nbsp;&nbsp;
        <input
          type="radio"
          name="gender"
          value="F"
          checked={studentInfo.gender === 'F'}
          onChange={handleChange}
        />
        <span>Female</span>
        &nbsp;&nbsp;&nbsp;

        <label>Qualification :</label>
        <select
          name="qualification"
          value={studentInfo.qualification}
          onChange={handleChange}
        >
          <option value="">Select Qualification</option>
          <option value="No formal education">No formal education</option>
          <option value="Primary education">Primary education</option>
          <option value="Secondary education or high school">Secondary education or high school</option>
          <option value="GED">GED</option>
          <option value="Vocational qualification">Vocational qualification</option>
          <option value="Bachelor's degree">Bachelor's degree</option>
          <option value="Master's degree">Master's degree</option>
          <option value="Doctorate or higher">Doctorate or higher</option>
        </select>
        <br />
        <span className="error">{studentInfo.errors && studentInfo.errors['name']}</span>
        <span className="error">{studentInfo.errors && studentInfo.errors['age']}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="error">{studentInfo.errors && studentInfo.errors['gender']}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span className="error">{studentInfo.errors && studentInfo.errors['qualification']}</span>
        <p>
          <input className="form-submit-button" type="button" value="Save" onClick={submitForm} />
          <input className="form-reset-button" type="button" value="Reset" onClick={resetForm} />
        </p>
      </form>
    </div>
  );
};

export default StudentInput;
