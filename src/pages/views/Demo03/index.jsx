import './index.scss'

const Demo03 = () => {
    return (
        <div className="mx-auto w-80 relative overflow-hidden bg-white shadow-lg rounded-2xl flex flex-col items-start">
            <div className="relative mt-10 flex items-center gap-3 px-5 z-10">
                <div className="w-20 h-20 rounded-full bg-[#e7e7e72a] flex justify-center items-center p-1">
                    <img className="rounded-full" src="https://picsum.photos/50" alt="user-icon" />
                </div>
                <div className="text-white">
                    <h1 className="text-lg">Dr.Jessica James</h1>
                    <p className="text-sm opacity-60">Dermathologist</p>
                </div>
            </div>
            <div className="absolute top-[-140px] -right-[30px] -rotate-12 w-96 h-80 bg-[#5582fd] rounded-[40px]"></div>         
            <button className="mt-16 mx-auto bg-[#559dfc] text-white px-8 py-1 rounded-lg flex items-center justify-center gap-2 leading-none"><span className="text-3xl pb-1">+</span><span>Add Branch</span></button>
            <div className="w-full my-10 px-12 link-group">
                <ul className='flex flex-col gap-7'>
                    <li><a href="#">Dasboard</a></li>
                    <li><a href="#">Post sessions</a></li>
                    <li><a href="#">Live sessions</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">Locum library</a></li>
                </ul>
            </div>
            <div className="absolute right-5 bottom-5 text-3xl text-[#b3b3b398] cursor-pointer hover:text-[#559dfc]">X</div>
        </div>
    );
};

export default Demo03;