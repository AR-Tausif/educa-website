import React from 'react';

const StudentsDetails = ({ params }: { params: { studentId: string } }) => {
    console.log(params);
  return (
    <div>
      <h5>StudentsDetails</h5>
    </div>
  );
};

export default StudentsDetails;