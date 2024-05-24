"use client"

import React from 'react';
import ExerciseWrapper from '@/app/components/page/exerciseWrapper/exerciseWrapper';
import ExerciseDescription from '@/app/components/page/exerciseDescription/exerciseDescription';
import ExerciseTwo from '@/app/components/exercises/02/02';
import FinalTwo from '@/app/components/final/02/02';

const Exercise01: React.FC = () => {
  return (
    <ExerciseWrapper exerciseName='02' prevUrl='/exercises/01' nextUrl='/exercises/03' exercise={<ExerciseTwo/>} final={<FinalTwo/>}>
        <ExerciseDescription title="Intro to JSX">
        <p className="mb-4">
            <strong>Objective:</strong> Learn how to add Tailwind CSS classes to a JSX element, wrap elements, and use variables in React.
        </p>
        <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
        <ol className="list-decimal list-inside mb-4">
            <li className="mb-2">Open the provided file for this exercise.</li>
            <li className="mb-2">Inside the <code className="bg-gray-500 px-1 rounded">ExerciseTwo</code> component, add the classes <code className="bg-gray-500 px-1 rounded">text-2xl</code> and <code className="bg-gray-500 px-1 rounded">text-red-600</code> to the <code className="bg-gray-500 px-1 rounded">h1</code> tag using <code className="bg-gray-500 px-1 rounded">className</code>.</li>
            <li className="mb-2">Wrap the <code className="bg-gray-500 px-1 rounded">h1</code> tag in a <code className="bg-gray-500 px-1 rounded">div</code> tag.</li>
            <li className="mb-2">Inside the <code className="bg-gray-500 px-1 rounded">div</code>, add a <code className="bg-gray-500 px-1 rounded">p</code> tag with the text "My name is &lt;your name&gt;".</li>
            <li className="mb-2">Update the <code className="bg-gray-500 px-1 rounded">name</code> variable at the top of the file to your name.</li>
            <li className="mb-2">Use the <code className="bg-gray-500 px-1 rounded">name</code> variable to replace "&lt;your name&gt;" in the paragraph tag.</li>
            <li>Save your changes and check your work by running the application.</li>
        </ol>
        <h2 className="text-xl font-semibold mb-2">Hints and Tips:</h2>
        <ul className="list-disc list-inside mb-4">
            <li className="mb-2"><strong>Tailwind CSS:</strong> Tailwind CSS is a utility-first CSS framework. You can add classes directly to your JSX elements using <code className="bg-gray-500 px-1 rounded">className</code>. For more classes, check out the <a href="https://tailwindcss.com/docs/installation" target="_blank" className="text-blue-500 underline">Tailwind CSS documentation</a>.</li>
            <li className="mb-2"><strong>JSX Elements:</strong> Wrap elements by enclosing them within a parent element, such as a <code className="bg-gray-500 px-1 rounded">div</code>.</li>
            <li className="mb-2"><strong>Using Variables:</strong> In JSX, you can use curly braces <code className="bg-gray-500 px-1 rounded">{}</code> to embed JavaScript expressions, such as variables, within your HTML-like code.</li>
        </ul>
        <p className="mb-2">
            Once you’ve completed this exercise, you’ll understand how to add styling using Tailwind CSS classes, wrap JSX elements, and dynamically use variables in your React components.
        </p>
        </ExerciseDescription>
    </ExerciseWrapper>
  );
};

export default Exercise01;