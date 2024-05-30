import React from 'react';

const StudentsDetails = ({ params }: { params: { studentId: string } }) => {
    console.log(params);
  return (
    <div>
      <h1>StudentsDetails</h1>
    </div>
  );
};

export default StudentsDetails;