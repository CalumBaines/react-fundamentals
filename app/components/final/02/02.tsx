import React from 'react';

const name = 'John Doe';

const FinalTwo: React.FC = () => {
  return (
    <div>
      <h1 className='text-2xl text-red-600'>Hello world</h1>
      <p>my name is {name}</p>
    </div>
  );
};

export default FinalTwo;