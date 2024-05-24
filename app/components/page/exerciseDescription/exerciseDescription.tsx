import React from 'react';

interface ExerciseDescriptionProps {
  title: string;
  children: React.ReactNode;
}

const ExerciseDescription: React.FC<ExerciseDescriptionProps> = ({
  title,
  children,
}) => {
  return (
    <div className='bg-gray-700 h-full p-12 w-1/2 ml-auto text-white'>
      <h1 className='text-3xl font-bold text-white mb-6'>{title}</h1>
      {children}
    </div>
  );
};

export default ExerciseDescription;