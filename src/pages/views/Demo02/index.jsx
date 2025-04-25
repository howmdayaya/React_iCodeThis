const Demo02 = () => {
  return (
    <div className="bg-white rounded-lg py-[50px] shadow-md w-[680px] transition-all duration-500 ease-in-out max-680:w-[480px]">
      <h2 className="text-center text-2xl mb-3">Let's keep in touch</h2>
      <p className="text-center max-w-[45ch] mb-10 mx-auto">
        Subscribe to keep up with fresh news and exciting updates. We promise
        not to spam you!
      </p>
      <div className="w-4/5 my-5 mx-auto flex flex-wrap max-680:min-w-80 max-680:flex-col">
        <input className="flex-[3_1_0%] p-4 mr-4 border border-gray-300 rounded-[5px] max-680:mb-[10px] max-680:mr-0" type="text" placeholder="Enter your email address" />
        <button className="flex-[1.5_1_0%] bg-[#007bff] text-white cursor-pointer rounded-[5px] hover:bg-[#92c3f7] hover:text-gray-800 transition-colors duration-500 max-680:p-4">SEND -&gt;</button>
        <div className="w-[70%] flex mt-5 items-start max-680:w-full">
          <input className="mt-[5px] mr-[10px]" type="checkbox" id="agreeCheckbox" />
          <span>
            I agree to my email address being stored and used to receive monthly
            newsletter.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Demo02;
