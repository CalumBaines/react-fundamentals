import React from 'react';

const people = [
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Isaac Richardson',
    role: 'Software Engineer',
    pronouns: 'he/him'
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Alex Wright',
    role: 'Senior Software Engineer',
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Hayley Jonas',
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Sam Welek',
    role: 'Senior Software Engineer',
    pronouns: 'he/him/his'
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Tom Swift',
    role: 'Engineering Lead',
    pronouns: 'he/him'
  },
];

// using the data from the people array, create a new component called InfoCard
// InfoCard will take in the following props: image, name, role, pronouns
// role and pronouns are optional props, so make sure they are not required and also only display when they are passed in
// the component should display the image, name, role, and pronouns in a styled card

// once you have created the InfoCard component, use the people array to map over and display each person in the array
// each person should be displayed using the InfoCard component
// make sure to pass in the correct props for each person

// The card should be displayed in a grid, the same as the designs in the figma file https://www.figma.com/design/voDfFvz6CqyzTHgXJlxXyh/Untitled?node-id=2-5&t=s3XRtBS9YrLFFspp-1

const ExerciseFour: React.FC = () => {
  return (
    <div>
    </div>
  );
};

export default ExerciseFour;