"use client"

import React from 'react';
import ExerciseWrapper from '@/app/components/page/exerciseWrapper/exerciseWrapper';
import ExerciseDescription from '@/app/components/page/exerciseDescription/exerciseDescription';
import ExerciseFive from '@/app/components/exercises/05/05';
import FinalFive from '@/app/components/final/05/05';

const Exercise01: React.FC = () => {
  return (
    <ExerciseWrapper exerciseName='05' prevUrl='/exercises/04' exercise={<ExerciseFive/>} final={<FinalFive/>}>
        <ExerciseDescription title="Managing state">
        <p className="mb-4">
            <strong>Objective:</strong> Learn how to use state in React to toggle the visibility of additional information within a component.
        </p>
        <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
        <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">Open the provided file for this exercise.</li>
            <li className="mb-2">Modify the <code className="bg-gray-500 px-1 rounded">InfoCard</code> component to include a button that reads <em>See more info +</em>.</li>
            <li className="mb-2">When the button is clicked, display the <code className="bg-gray-500 px-1 rounded">bio</code> text from the person object.</li>
            <li className="mb-2">Ensure the <code className="bg-gray-500 px-1 rounded">bio</code> text is hidden by default.</li>
            <li className="mb-2">Use state to manage the visibility of the <code className="bg-gray-500 px-1 rounded">bio</code> text.</li>
            <li className="mb-2">As an extra task, change the plus sign to a minus sign when the <code className="bg-gray-500 px-1 rounded">bio</code> is displayed and back to a plus when it is hidden.</li>
        </ol>
        <h2 className="text-xl font-semibold mb-2">Hints and Tips:</h2>
        <ul className="list-disc list-inside mb-4">
            <li className="mb-2"><strong>Using State:</strong> Use the <code className="bg-gray-500 px-1 rounded">useState</code> hook to manage the visibility of the <code className="bg-gray-500 px-1 rounded">bio</code> text.</li>
            <li className="mb-2"><strong>Conditional Rendering:</strong> Use conditional rendering to show or hide the <code className="bg-gray-500 px-1 rounded">bio</code> text based on the state.</li>
            <li className="mb-2"><strong>Button Text:</strong> Update the button text based on the visibility of the <code className="bg-gray-500 px-1 rounded">bio</code> text.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">Design Reference:</h2>
        <p className="mb-4">
            Refer to the design specifications in the <a href="https://www.figma.com/design/voDfFvz6CqyzTHgXJlxXyh/Untitled?node-id=0-1&t=s3XRtBS9YrLFFspp-1" target="_blank" className="text-blue-500 underline">Figma file</a> for layout and styling details.
        </p>
        <p className="mb-2">
            Once you’ve completed this exercise, you’ll understand how to use state to toggle content visibility and dynamically update UI elements in React.
        </p>
        </ExerciseDescription>
    </ExerciseWrapper>
  );
};

export default Exercise01;