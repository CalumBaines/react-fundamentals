"use client"

import React from 'react';
import ExerciseWrapper from '@/app/components/page/exerciseWrapper/exerciseWrapper';
import ExerciseDescription from '@/app/components/page/exerciseDescription/exerciseDescription';
import ExerciseThree from '@/app/components/final/03/03';
import FinalThree from '@/app/components/final/03/03';

const Exercise01: React.FC = () => {
  return (
    <ExerciseWrapper exerciseName='03' prevUrl='/exercises/02' nextUrl='/exercises/04' exercise={<ExerciseThree/>} final={<FinalThree/>}>
        <ExerciseDescription title="Components">
        <p className="mb-4">
            <strong>Objective:</strong> Learn how to abstract JSX into a new component and pass props to it.
        </p>
        <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
        <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">Open the provided file for this exercise.</li>
            <li className="mb-2">Abstract the paragraph text into a new component called <code className="bg-gray-500 px-1 rounded">MyName</code>.</li>
            <li className="mb-2">The new component should take a prop for the <code className="bg-gray-500 px-1 rounded">name</code> and pass it in from the original file.</li>
            <li className="mb-2">Add a second prop for a <code className="bg-gray-500 px-1 rounded">hobby</code> and display the text "&amp; I love {`{hobby}`}".</li>
            <li className="mb-2">Ensure the hobby prop is optional, and only display the hobby text when the prop is passed in.</li>
        </ol>
        <h2 className="text-xl font-semibold mb-2">Hints and Tips:</h2>
        <ul className="list-disc list-inside mb-4">
            <li className="mb-2"><strong>Component Abstraction:</strong> Move the paragraph JSX into a new functional component called <code className="bg-gray-500 px-1 rounded">MyName</code>.</li>
            <li className="mb-2"><strong>Props in React:</strong> Use props to pass data into the <code className="bg-gray-500 px-1 rounded">MyName</code> component. Props are accessed via the function parameter.</li>
            <li className="mb-2"><strong>Optional Props:</strong> Use conditional rendering to display the hobby text only when the hobby prop is provided.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Extra Exercise:</h2>
        <p className="mb-4">
            Recreate the <code className="bg-gray-500 px-1 rounded">ExerciseThree</code> component design in this <a href="https://www.figma.com/design/voDfFvz6CqyzTHgXJlxXyh/Untitled?node-id=2-5&t=s3XRtBS9YrLFFspp-1" target="_blank" className="text-blue-500 underline">Figma file</a>.
        </p>
        <p className="mb-2">
            <strong>Tips:</strong>
        </p>
        <ul className="list-disc list-inside mb-4">
            <li className="mb-2">Consider renaming the component for clarity.</li>
            <li className="mb-2">Think about how you would display the image and where the data for the image would be stored.</li>
        </ul>
        <p className="mb-2">
            Once you’ve completed this exercise, you’ll understand how to abstract components, use props, and conditionally render content in React.
        </p>
        </ExerciseDescription>
    </ExerciseWrapper>
  );
};

export default Exercise01;