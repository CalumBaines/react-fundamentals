import React from 'react';
import InfoCard from './infoCard';

const person = {
  image: 'https://i.pravatar.cc/300',
  name: 'Isaac Richardson',
  role: 'Software Engineer',
  pronouns: 'he/him'
}

const FinalThree: React.FC = () => {
  return (
    <div>
      <InfoCard {...person} />
    </div>
  );
};

export default FinalThree;