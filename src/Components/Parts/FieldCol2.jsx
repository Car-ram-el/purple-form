import React from "react";

import calendar from "../../assets/calendar.svg";

const FieldCol2 = ({ col1Name, col1Value, col2Name, col2Value }) => {
  return (
    <div className=" self-stretch justify-start items-start gap-6 inline-flex">
      <div className="grow shrink basis-0 h-[70px] justify-start items-start gap-8 flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
          <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
            <label htmlFor="one" className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight">
              {col1Name}
            </label>
            <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                <input id="one" type="text" placeholder={col1Value} className="grow shrink basis-0 text-zinc-700 text-base font-normal font-['Inter'] leading-normal focus:outline-none"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grow shrink basis-0 h-[70px] justify-start items-start gap-8 flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
          <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
            <label htmlFor="two" className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight">
              {col2Name}
            </label>
            <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
              <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                <input id="two" type="text" placeholder={col2Value} className="grow shrink basis-0 text-zinc-700 text-base font-normal font-['Inter'] leading-normal focus:outline-none"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldCol2;
