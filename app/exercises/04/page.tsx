"use client"

import React from 'react';
import ExerciseWrapper from '@/app/components/page/exerciseWrapper/exerciseWrapper';
import ExerciseDescription from '@/app/components/page/exerciseDescription/exerciseDescription';
import ExerciseFour from '@/app/components/exercises/04/04';
import FinalFour from '@/app/components/final/04/04';

const Exercise01: React.FC = () => {
  return (
    <ExerciseWrapper exerciseName='04' prevUrl='/exercises/03' nextUrl='/exercises/05' exercise={<ExerciseFour/>} final={<FinalFour/>}>
        <ExerciseDescription title="Rendering arrays">
        <p className="mb-4">
            <strong>Objective:</strong> Learn how to create a custom component that takes props, and use it to display a list of people in a styled card format.
        </p>
        <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
        <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">Open the provided file for this exercise.</li>
            <li className="mb-2">Create a new component called <code className="bg-gray-500 px-1 rounded">InfoCard</code> that takes in the following props: <code className="bg-gray-500 px-1 rounded">image</code>, <code className="bg-gray-500 px-1 rounded">name</code>, <code className="bg-gray-500 px-1 rounded">role</code>, and <code className="bg-gray-500 px-1 rounded">pronouns</code>.</li>
            <li className="mb-2">Ensure <code className="bg-gray-500 px-1 rounded">role</code> and <code className="bg-gray-500 px-1 rounded">pronouns</code> are optional props, and only display them when they are passed in.</li>
            <li className="mb-2">The <code className="bg-gray-500 px-1 rounded">InfoCard</code> component should display the image, name, role, and pronouns in a styled card.</li>
            <li className="mb-2">Use the <code className="bg-gray-500 px-1 rounded">people</code> array to map over and display each person using the <code className="bg-gray-500 px-1 rounded">InfoCard</code> component.</li>
            <li className="mb-2">Ensure each person is displayed correctly by passing in the appropriate props to the <code className="bg-gray-500 px-1 rounded">InfoCard</code> component.</li>
            <li className="mb-2">Display the cards in a grid layout, following the design in the <a href="https://www.figma.com/design/voDfFvz6CqyzTHgXJlxXyh/Untitled?node-id=2-5&t=s3XRtBS9YrLFFspp-1" target="_blank" className="text-blue-500 underline">Figma file</a>.</li>
        </ol>
        <h2 className="text-xl font-semibold mb-2">Hints and Tips:</h2>
        <ul className="list-disc list-inside mb-4">
            <li className="mb-2"><strong>Component Creation:</strong> Define the <code className="bg-gray-500 px-1 rounded">InfoCard</code> component as a functional component that accepts props.</li>
            <li className="mb-2"><strong>Props in React:</strong> Use TypeScript to define the prop types, ensuring <code className="bg-gray-500 px-1 rounded">role</code> and <code className="bg-gray-500 px-1 rounded">pronouns</code> are optional.</li>
            <li className="mb-2"><strong>Conditional Rendering:</strong> Use conditional rendering to display the <code className="bg-gray-500 px-1 rounded">role</code> and <code className="bg-gray-500 px-1 rounded">pronouns</code> only when they are provided.</li>
            <li className="mb-2"><strong>Grid Layout:</strong> Use Tailwind CSS classes to style the grid layout as specified in the Figma design.</li>
        </ul>
        <p className="mb-2">
            Once you’ve completed this exercise, you’ll understand how to create a custom component, pass props, and render a list of items using React.
        </p>
        </ExerciseDescription>
    </ExerciseWrapper>
  );
};

export default Exercise01;