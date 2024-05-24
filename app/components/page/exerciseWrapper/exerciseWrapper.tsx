import React, { useState } from 'react';

interface ExerciseWrapperProps {
  nextUrl?: string;
  prevUrl?: string;
  exerciseName: string;
  children: React.ReactNode;
  final?: React.ReactNode;
  exercise?: React.ReactNode;
}

const ExerciseWrapper: React.FC<ExerciseWrapperProps> = ({
  nextUrl,
  prevUrl,
  exerciseName,
  children,
  final,
  exercise
}) => {
  const [showFinal, setShowFinal] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <a href='/'><h1 className=" text-2xl font-bold">React Fundamentals</h1></a>
        <div className="flex items-center space-x-2">
          <h2 className='text-gray-500'>{ exerciseName }</h2>
        { prevUrl &&  (
          <a href={prevUrl}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-300 hover:text-blue-500 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </a>
          )}
          { nextUrl &&  (
          <a href={nextUrl}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-300 hover:text-blue-500 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
          )}
        </div>
      </header>
      <main className="flex flex-grow">
        { final && exercise &&
          <div className='w-1/2'>
            <button onClick={() => setShowFinal(!showFinal)} className="bg-blue-700 p-4 text-white block text-left ml-auto">
              { showFinal ? 'Show exercise' : 'Show finished version' }
            </button>
            <div className='p-12'>
              { showFinal ? final : exercise }
            </div>
          </div>
        }
        {children}
      </main>
    </div>
  );
};

export default ExerciseWrapper;