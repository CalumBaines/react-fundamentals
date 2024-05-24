import React from 'react';
import InfoCard from './infoCard';

const people = [
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Isaac Richardson',
    role: 'Software Engineer',
    pronouns: 'he/him',
    bio: 'Developer extraordinaire'
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Alex Wright',
    role: 'Senior Software Engineer',
    bio: 'Developer extraordinaire'
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Hayley Jonas',
    bio: 'Developer extraordinaire'
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Sam Welek',
    role: 'Senior Software Engineer',
    pronouns: 'he/him/his',
    bio: 'Developer extraordinaire'
  },
  {
    image: 'https://i.pravatar.cc/300',
    name: 'Tom Swift',
    role: 'Engineering Lead',
    pronouns: 'he/him',
    bio: 'Developer extraordinaire'
  },
];


// using the data from the people array, I want you to display the bio text in the InfoCard component
// The info card will show a button that reads See more info + and when clicked it will display the bio text
// The bio text should be hidden by default

// see the figma file for the designs https://www.figma.com/design/voDfFvz6CqyzTHgXJlxXyh/Untitled?node-id=0-1&t=s3XRtBS9YrLFFspp-1


// HINT: You will need to use state to store the visibility of the bio text

// as an extra task, can you change the plus to a minus when the bio is being displayed and change it back to a plus when the bio is hidden
const ExerciseFive: React.FC = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-6'>
      { people.map((person, index) => (
        <InfoCard key={index} name={person.name} role={person.role} pronouns={person.pronouns} image={person.image} />
      ))}
    </div>
  );
};

export default ExerciseFive;