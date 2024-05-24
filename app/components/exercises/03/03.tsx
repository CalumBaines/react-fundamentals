import React from 'react';

const name = 'John Doe';
// can you abstract the paragraph text into a new component called nyName
// the new component will need to be able to take in a prop for the name and passed in from this file
// can you pass in a second variable for a hobby and display the text & I love {hobby}
// hobby will be an optional prop, so we need to make sure hte text above only shows when the prop is passed in

// as an extra exercise can you recreate the exercise 3 component in this design file https://www.figma.com/design/voDfFvz6CqyzTHgXJlxXyh/Untitled?node-id=2-5&t=s3XRtBS9YrLFFspp-1
// TIP: would you rename the component? how would display the image? and where would the data be stored?
const ExerciseThree: React.FC = () => {
  return (
    <div>
      <h1 className='text-2xl text-red-600'>Hello world</h1>
      <p>my name is {name}</p>
    </div>
  );
};

export default ExerciseThree;