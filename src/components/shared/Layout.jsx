import React, { useState } from "react";
import Header from "./Header";
import Question from "./Question";
import Answer from "./Answer";

const Layout = ({ data, inProgress = false, displayImagesPanel = true, width, onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle button click
  const handleButtonClick = () => {
    onSearch(inputValue); // Trigger the search with the input value
  };

  return (
    <div className="bg-black h-screen flex flex-col items-center w-full">
      <Header />
      <div className={`p-2 flex flex-col justify-between ${width ? width : 'w-full'} h-full`}>
        <div className='flex flex-col gap-6'>
          {data.map((item, index) => {
            // Logic for rendering questions and answers
            if (index === data.length - 1 && inProgress === true) {
              return <p className='text-15 text-medium-gray' key={index}>{item.description}</p>;
            }

            if (index % 2 === 0) {
              return (
                <React.Fragment key={index}>
                  <Question data={item} />
                  {item.imageData[1] && <div>{item.imageData[1]}</div>}
                </React.Fragment>
              );
            } else {
              return <Answer key={index} data={item} />;
            }
          })}
        </div>

        <div className='w-full relative'>
          <input
            className='w-full rounded-sm p-3 placeholder-light-gray
              text-[12px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px]'
            placeholder={data.length > 3 ? 'Reply to Click' : 'Message Click'}
            value={inputValue}
            onChange={handleInputChange} // Update input value
          />
          <div
            className='bg-yellow h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 xl:h-12 xl:w-12 2xl:h-13 2xl:w-13 absolute right-2 top-2 rounded-sm p-2 cursor-pointer'
            onClick={handleButtonClick} // Call search function when clicked
          >
            <img src='./icons/arrow_upwards.png' alt="Send" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
