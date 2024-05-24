import React, { useState } from 'react';

interface Props {
  name: string;
  image: string;
  bio: string;
  role?: string;
  pronouns?: string;
}

const InfoCard: React.FC<Props> = ({name, role, pronouns, image, bio}) => {
  const [showBio, setShowBio] = useState(false);

  const handleButtonClick = () => {
    setShowBio(!showBio);
  };

  return (
    <div>
      <div className='flex w-full items-center p-6 rounded-t bg-gray-50 shadow-lg shadow-gray-200'>
        <div className="overflow-hidden rounded-lg h-20 w-20 mr-4 relative flex-none">
          <img src={image} alt={name} className='h-full w-auto absolute' />
        </div>
        <div className='grow'>
          <p className="text-2xl font-bold text-gray-900 leading-6">{name}</p>
          {role && <p className="text-gray-700 leading-4 mt-4">{role}</p>}
          {pronouns && <p className="text-sm text-gray-500 leading-4">{pronouns}</p>}
        </div>
      </div>
      <button onClick={handleButtonClick} className="bg-gray-700 p-4 rounded-b text-white block w-full text-left">
        <span>See more info +</span>
        {showBio && <p className="pt-4 text-white">{bio}</p>}
      </button>
    </div>
  );
};

export default InfoCard;