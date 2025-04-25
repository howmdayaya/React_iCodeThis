import React from 'react';

function Demo01() {
  return (
    <div className=" flex justify-center w-full h-full bg-gradient-to-r from-[rgb(188,188,248)] to-[rgb(214,238,214)] rounded-lg shadow-[0_0_10px_6px_#fff] min-w-[320px]">
        <div className="w-full">
            <div className="w-[30%] min-w-[480px] h-auto flex mx-auto items-center flex-col">
                <p className="text-xl my-10 mx-auto -mb-3">(╯°□°）╯︵ ┻━┻</p>
                <h1 className="text-[200px]">404</h1>
                <h2 className="text-center">The link you clicked may be broken or the page may jave been removed.</h2>
                <p className="my-8 mx-auto">Visit the <a href="#" className="text-[#7e7e7e]">home page</a> or <a href="#" className="text-[#7e7e7e]">contact</a> me</p>
            </div>
        </div>
   </div>
  );
}

export default Demo01;