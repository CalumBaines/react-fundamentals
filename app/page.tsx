"use client"

import React from 'react';
import ExerciseWrapper from '@/app/components/page/exerciseWrapper/exerciseWrapper';
import ExerciseDescription from '@/app/components/page/exerciseDescription/exerciseDescription';
import ExerciseOne from '@/app/components/exercises/01/01';

const HelloWorld: React.FC = () => {
  return <div>Hello World!</div>;
};

const Exercise01: React.FC = () => {
  return (
    <ExerciseWrapper exerciseName='Intro' >
      <div className='bg-gray-700 h-full p-12 w-full ml-auto text-white'>
        <h1 className='text-3xl font-bold text-white mb-6'>Introduction</h1>
        <p className="mb-4"></p>To run this project, you will need to have node JS installed on your machine. You can download it from <a href="https://nodejs.org/en/download/" className="text-blue-400">here</a>.<br></br>
        <p className="mb-4"></p>Once you have node JS installed, you can run the following commands in the terminal to get started:<br></br>
        <code className="bg-gray-500 px-1 rounded">npm install</code><br></br>
        <code className="bg-gray-500 px-1 rounded">npm run dev</code><br></br>
        <p className="mb-4"></p>These commands will install the necessary dependencies and start the development server.<br></br>
        <p className="mb-4"></p>Once the server is running, you can view the application by opening <a href="http://localhost:3000" className="text-blue-400">http://localhost:3000</a> in your browser.<br></br>

        <h2 className='text-xl font-bold text-white mt-6 mb-6'>Exercises</h2>
        <p className="mb-4"></p>There are a series of exercises that will help you learn the basics of React and Tailwind CSS.<br></br>
        <p className="mb-4"></p>Each exercise will cover a different topic and build on the previous one.<br></br>
        <p className="mb-4"></p>Click on the exercise links below to get started.<br></br>
        <ul className="list-disc list-inside my-4">
          <li className="mb-2"><a href="/exercises/01" className="text-blue-400">Exercise 1: Hello World</a></li>
          <li className="mb-2"><a href="/exercises/02" className="text-blue-400">Exercise 2: Intro to JSX</a></li>
          <li className="mb-2"><a href="/exercises/03" className="text-blue-400">Exercise 3: Components</a></li>
          <li className="mb-2"><a href="/exercises/04" className="text-blue-400">Exercise 4: Rendering arrays</a></li>
          <li className="mb-2"><a href="/exercises/05" className="text-blue-400">Exercise 5: Managing state</a></li>
        </ul>
      </div>
    </ExerciseWrapper>
  );
};

export default Exercise01;