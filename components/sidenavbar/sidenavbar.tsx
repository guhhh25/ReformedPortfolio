import menuitems from "./menuitems";

export default function Sidenavbar() {
  const menuTitle = "Software Engineer";

  return (
    <div className="flex flex-col  gradient-1 w-72 h-screen p-5 ">
      <div className="flex justify-center items-center h-[220px] w-[220px] bg-black rounded-full ml-3 borderGradient p-5 ">
      <div className="flex justify-center  bg-white rounded-full h-auto w-auto min-w-[200px]  min-h-[200px] p-5 bg-[url('/GustavoImg.jpg')] bg-center bg-cover"/>      
      </div>
      <div className="text-[20px] uppercase mt-5 tracking-widest">{menuTitle}</div>
      <hr className="h-2 w-full"/>
      <div className="">
        {menuitems.map((items, key) => {
          return (
            <div
              className="flex items-start justify-between  border-b-2  p-0 mt-10 uppercase text-xl textColor border-gradient-br-blue-green-gray-900 tracking-widest"
              key={"pato"}
            >
              <div className="cursor-pointer ">
              {items.name} 
            </div>
              <div className="h-5 w-6">
                {items.icon} 
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
