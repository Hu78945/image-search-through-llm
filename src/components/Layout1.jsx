import React from "react";
import Header from "./shared/Header";
import Prompt from "./shared/Prompt";
import ImagesPanel from "./shared/ImagesPanel";
import Question from "./shared/Question";
import Answer from "./shared/Answer";

const Layout1 = ({ data, inProgress = false, displayImagesPanel = true }) => {
  console.log('data:', data);
  
  return (
    <div className="flex">
      <div className="bg-black h-screen flex flex-col items-center w-full">
        <Header />
        <div className='p-2 flex flex-col justify-between w-1/2 h-full'>
          <div className='flex flex-col gap-6'>
            {data.map((item, index) => {
              console.log('item:', item);

              // Check if this is the last item and `inProgress` is true
              if (index === data.length - 1 && inProgress === true) {
                return <p className='text-15 text-medium-gray' key={index}>{item.description}</p>;
              }

              // Check if the index is even
              if (index % 2 === 0) {
                return (
                  <React.Fragment key={index}>
                    <Question data={item} />
                    {item.imageData[1] && <div>{item.imageData[1]}</div>}
                  </React.Fragment>
                );
              }

              // Check if the index is odd
              if (index % 2 !== 0) {
                return <Answer key={index} data={item} />;
              }
            })}
          </div>

          <div className='w-full relative'>
            <input className='w-full rounded-sm p-3 placeholder-light-gray' placeholder='Message Click'></input>
            <div className='bg-yellow h-8 w-8 absolute right-2 top-2 rounded-sm p-2'>
              <img src='./icons/arrow_upwards.png'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout1;
