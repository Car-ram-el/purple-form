import React from "react";

const Optionsss = ({foo}) => {
  return (
    <div className="h-5 justify-start items-start flex">
      <div className="w-[280px] h-5 justify-start items-start gap-2 flex">
        <div className="pt-0.5 justify-center items-center flex">
      <input type="checkbox" className="w-4 h-4 relative bg-white rounded border border-black"/>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
          <div className="self-stretch text-slate-700 text-md font-medium font-['Inter'] leading-tight">
            {foo}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Optionsss;
