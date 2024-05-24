import React from 'react';
import InfoCard from './infoCard';

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

const FinalFour: React.FC = () => {
  return (
    <div className='w-full grid grid-cols-2 gap-6'>
      { people.map((person, index) => (
        <InfoCard key={index} name={person.name} role={person.role} pronouns={person.pronouns} image={person.image} />
      ))}
    </div>
  );
};

export default FinalFour;