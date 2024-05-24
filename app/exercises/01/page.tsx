"use client"

import React from 'react';
import ExerciseWrapper from '@/app/components/page/exerciseWrapper/exerciseWrapper';
import ExerciseDescription from '@/app/components/page/exerciseDescription/exerciseDescription';
import ExerciseOne from '@/app/components/exercises/01/01';
import FinalOne from '@/app/components/final/01/01';

const HelloWorld: React.FC = () => {
  return <div>Hello World!</div>;
};

const Exercise01: React.FC = () => {
  return (
    <ExerciseWrapper exerciseName='01' nextUrl='/exercises/02' final={<FinalOne/>} exercise={<ExerciseOne />}>
        {/* <div className='w-1/2 p-12 flex'>
          <ExerciseOne />
        </div> */}
        <ExerciseDescription title="Hello World!">
        <p className="mb-4">
          <strong>Objective:</strong> Learn how to return JSX from a React functional component by displaying &quot;Hello World&quot; wrapped in an <code className="bg-gray-500 px-1 rounded">h1</code> tag.
        </p>
        <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">Open the provided file for this exercise.</li>
          <li className="mb-2">Inside the <code className="bg-gray-500 px-1 rounded">ExerciseOne</code> component, modify the <code className="bg-gray-500 px-1 rounded">return</code> statement to display the text &quot;Hello World&quot; inside an <code className="bg-gray-500 px-1 rounded">h1</code> tag.</li>
          <li>Save your changes and check your work by running the application.</li>
        </ol>
        <h2 className="text-xl font-semibold mb-2">Hints and Tips:</h2>
        <ul className="list-disc list-inside mb-4">
            <li className="mb-2"><strong>JSX Basics:</strong> JSX allows you to write HTML-like code within your JavaScript files. Wrap your text inside an <code className="bg-gray-500 px-1 rounded">h1</code> tag.</li>
            <li><strong>Functional Component:</strong> In a React functional component, you define what the component should render by returning JSX from the function.</li>
        </ul>
        <p className="mb-2">
            Once you’ve completed this exercise, you’ll understand how to use JSX to return HTML elements from a React component.
        </p>
        </ExerciseDescription>
    </ExerciseWrapper>
  );
};

export default Exercise01;