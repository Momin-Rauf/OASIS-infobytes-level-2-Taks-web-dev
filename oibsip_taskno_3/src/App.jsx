import React from 'react';
import TodoApp from './TodoApp';

const App = () => {
  return (
    <>
    <div className='bg-gray-300 flex flex-col shadow-md hover:border-[1px]   shadow-black m-10 p-10 justify-center items-center' >
      <TodoApp />
      <div className='mt-10 flex flex-col justify-center items-center p-2 rounded-full text-black font-bold hover:bg-black hover:text-white bg-gray-500 border-black border-[.5px] hover:animate-pulse w-64 '>
      OASIS INFOBYTES
    </div>
    </div></>
  );
};

export default App;
