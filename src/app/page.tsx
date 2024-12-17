import React from "react";

export default function Home() {
  return (
  
<div className='md:grid-rows-[80px_auto_auto_80px] md:grid-cols-3 sm:grid-cols-1 sm:grid-rows-none'>
    <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-3 gap-5">
      <div className="bg-teal-800 sm:bg-teal-400 md:bg-teal-600 lg:bg-teal-800 col-span-3 text-xl font-bold text-center content-center border-2 border-black">Header</div>
      <div className="bg-teal-800 sm:bg-teal-400 md:bg-teal-600 lg:bg-teal-800 row-span-2 text-xl font-bold text-center content-center border-2 border-black">Sidebar</div>
      <div className="bg-teal-800 sm:bg-teal-400 md:bg-teal-600 lg:bg-teal-800 col-span-2 text-xl font-bold text-center content-center border-2 border-black">Content-1</div>
      <div className="bg-teal-800 sm:bg-teal-400 md:bg-teal-600 lg:bg-teal-800 text-xl font-bold text-center content-center border-2 border-black">Content-2</div>
      <div className="bg-teal-800 sm:bg-teal-400 md:bg-teal-600 lg:bg-teal-800 text-xl font-bold text-center content-center border-2 border-black">Content-3</div>
      <div className="bg-teal-800 sm:bg-teal-400 md:bg-teal-600 lg:bg-teal-800 col-span-3 text-xl font-bold text-center content-center border-2 border-black">Footer</div>
    </div>
</div>

);
}