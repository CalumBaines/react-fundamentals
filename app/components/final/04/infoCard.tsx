import React from 'react';

interface Props {
  image: string;
  name: string;
  role?: string;
  pronouns?: string;
}

const InfoCard: React.FC<Props> = ({name, role, pronouns, image}) => {
  return (
    <div className="rounded p-6 bg-gray-50 shadow-lg shadow-gray-200 flex w-full items-center">
      <div className="overflow-hidden rounded-lg h-20 w-20 mr-4 relative flex-none">
        <img src={image} alt={name} className='h-full w-auto absolute' />
      </div>
      <div className='grow'>
        <p className="text-2xl font-bold text-gray-900 leading-6">{name}</p>
        {role && <p className="text-gray-700 leading-4 mt-4">{role}</p>}
        {pronouns && <p className="text-sm text-gray-500 leading-4">{pronouns}</p>}
      </div>
    </div>
  );
};

export default InfoCard;