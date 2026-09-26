import React, { useEffect, useState } from 'react';

export default function LoadingScreenAnimation({onComplete}) {
  const [text, setText] = useState("");

  const fullText = "Welcome to my Portofolio! ";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index >= fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
            onComplete();
        },1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center gap-5">

     
      <div className="mb-4 text-2xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1 text-2xl font-bold"> | </span>
      </div>

    
      <div className="w-[300px] h-[3px] bg-gray-700 rounded relative overflow-hidden">
        <div className="w-[100px] h-full bg-[#4ee4e4] shadow-[0_0_15px_#4179e3] animate-loading-bar"></div>
      </div>
    </div>
  );
}