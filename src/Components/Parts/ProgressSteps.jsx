import React from "react";

const ProgressSteps = ({page}) => {
  return (
    <div className=" px-12 flex-col justify-start items-center inline-flex">
      <div className="w-[1008px] h-[114px] relative">
        <div className="w-[1120px] h-0.5 left-[-56px] top-[19px] absolute">

          {page==="1" ? <>
          <div className="w-[237px] h-0.5 left-0 top-0 absolute bg-violet-500" />
          <div className="w-[608px] h-0.5 left-[256px] top-0 absolute bg-gray-200" />
          <div className="w-[608px] h-0.5 left-[612px] top-0 absolute bg-gray-200" />
          </>: page==="2" ? <>
            <div className="w-[475px] h-0.5 left-0 top-0 absolute bg-violet-500" />
            <div className="w-[694px] h-0.5 left-[512px] top-0 absolute bg-gray-200" />
          </>: page==="3" ? <>
            <div className="w-[608px] h-0.5 left-[612px] top-0 absolute bg-gray-200" />
            <div className="w-[715px] h-0.5 left-0 top-0 absolute bg-violet-500" />
          </>: page=="4" ? <>
            <div className="w-[608px] h-0.5 left-[256px] top-0 absolute bg-gray-200" />
            <div className="w-[608px] h-0.5 left-[612px] top-0 absolute bg-gray-200" />
            <div className="w-[955px] h-0.5 left-0 top-0 absolute bg-violet-500" />
          </>: page=="5" ? <>
            <div className="w-[608px] h-0.5 left-[256px] top-0 absolute bg-gray-200" />
            <div className="w-[608px] h-0.5 left-[612px] top-0 absolute bg-gray-200" />
            <div className="w-[1195px] h-0.5 left-0 top-0 absolute bg-violet-500" />
          </>: page=="6" && <>
            <div className="w-[608px] h-0.5 left-[256px] top-0 absolute bg-gray-200" />
            <div className="w-[608px] h-0.5 left-[612px] top-0 absolute bg-gray-200" />
            <div className="w-[1200px] h-0.5 left-0 top-0 absolute bg-violet-500" />
          </>}


        </div>
        <div className="left-[-156px] top-0 absolute justify-start items-start inline-flex">
          <div className="w-60 flex-col justify-start items-center gap-4 inline-flex">
            <div className="w-10 h-10 bg-purple-50 rounded-[20px] justify-center items-center inline-flex">
              <div className="grow shrink basis-0 self-stretch py-2 rounded-[20px] border-2 border-violet-500 justify-center items-center inline-flex">
                <div className="text-center text-violet-700 text-base font-semibold font-['Inter'] leading-normal">
                  1
                </div>
              </div>
            </div>
            <div className="self-stretch h-8 pt-2 flex-col justify-start items-center gap-0.5 flex">
              <div className="self-stretch text-center text-violet-700 text-base font-semibold font-['Inter'] leading-normal">
                Overview
              </div>
            </div>
          </div>
          <div className="w-60 flex-col justify-start items-center gap-4 inline-flex">
            <div className="w-10 h-10 bg-purple-50 rounded-[20px] shadow justify-center items-center inline-flex">
              <div className={`grow shrink basis-0 self-stretch py-2 bg-purple-50 rounded-[20px] border-2 ${page>1 ? "border-violet-500" : "border-slate-700"} justify-center items-center inline-flex`}>
                <div className={`text-center ${page>1 ? "text-violet-700" : "text-slate-700"} text-base font-semibold font-['Inter'] leading-normal`}>
                  2
                </div>
              </div>
            </div>
            <div className="self-stretch h-8 pt-2 flex-col justify-start items-center gap-0.5 flex">
              <div className={`self-stretch text-center ${page>1 ? 'text-violet-700' : 'text-slate-700'} text-base font-semibold font-['Inter'] leading-normal`}>
                Campus Details
              </div>
            </div>
          </div>
          <div className="w-60 flex-col justify-start items-center gap-4 inline-flex">
            <div className="w-10 h-10 bg-purple-50 rounded-[20px] shadow justify-center items-center inline-flex">
              <div className={`grow shrink basis-0 self-stretch pl-[15px] pr-3.5 py-2 bg-purple-50 rounded-[20px] border-2 ${page>2 ? "border-violet-500" : "border-slate-700"} justify-center items-center inline-flex`}>
                <div className={`text-center ${page>2 ? "text-violet-700" : "text-slate-700"} text-base font-semibold font-['Inter'] leading-normal`}>
                  3
                </div>
              </div>
            </div>
            <div className="self-stretch h-8 pt-2 flex-col justify-start items-center gap-0.5 flex">
              <div className={`self-stretch text-center ${page>2 ? 'text-violet-700' : 'text-slate-700'} text-base font-semibold font-['Inter'] leading-normal`}>
                Course Details
              </div>
            </div>
          </div>
          <div className="w-60 flex-col justify-start items-center gap-4 inline-flex">
            <div className="w-10 h-10 bg-purple-50 rounded-[20px] shadow justify-center items-center inline-flex">
              <div className={`grow shrink basis-0 self-stretch pl-[15px] pr-3.5 py-2 bg-purple-50 rounded-[20px] border-2 ${page>3 ? "border-violet-500" : "border-slate-700"} justify-center items-center inline-flex`}>
                <div className={`text-center ${page>3 ? 'text-violet-700' : 'text-slate-700'} text-base font-semibold font-['Inter'] leading-normal`}>
                  4
                </div>
              </div>
            </div>
            <div className="self-stretch h-8 pt-2 flex-col justify-start items-center gap-0.5 flex">
              <div className={`self-stretch text-center ${page>3 ? 'text-violet-700' : 'text-slate-700'} text-base font-semibold font-['Inter'] leading-normal`}>
                Placement Statistics
              </div>
            </div>
          </div>
          <div className="w-60 flex-col justify-start items-center gap-4 inline-flex">
            <div className="w-10 h-10 bg-purple-50 rounded-[20px] justify-center items-center inline-flex">
              <div className={`grow shrink basis-0 self-stretch pl-[15px] pr-3.5 py-2 rounded-[20px] border-2 ${page>4 ? "border-violet-500" : "border-slate-700"} justify-center items-center inline-flex`}>
                <div className={`text-center ${page>4 ? 'text-violet-700' : 'text-slate-700'} text-base font-semibold font-['Inter'] leading-normal`}>
                  5
                </div>
              </div>
            </div>
            <div className="self-stretch h-8 pt-2 flex-col justify-start items-center gap-0.5 flex">
              <div className={`self-stretch text-center ${page>4 ? 'text-violet-700' : 'text-slate-700'} text-base font-semibold font-['Inter'] leading-normal`}>
                Gallery & Video
              </div>
            </div>
          </div>
          <div className="w-60 flex-col justify-start items-center gap-4 inline-flex">
            <div className="w-10 h-10 bg-purple-50 rounded-[20px] justify-center items-center inline-flex">
              <div className={`grow shrink basis-0 self-stretch pl-[15px] pr-3.5 py-2 rounded-[20px] border-2 ${page>5 ? "border-violet-500" : "border-slate-700"} justify-center items-center inline-flex`}>
                <div className={`text-center ${page>5 ? 'text-violet-700' : 'text-slate-700'} text-base font-semibold font-['Inter'] leading-normal`}>
                  6
                </div>
              </div>
            </div>
            <div className="self-stretch h-8 pt-2 flex-col justify-start items-center gap-0.5 flex">
              <div className={`self-stretch text-center ${page>5 ? 'text-violet-700' : 'text-slate-700'} text-base font-semibold font-['Inter'] leading-normal`}>
                Frequently Asked Questions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
