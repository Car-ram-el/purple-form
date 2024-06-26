import React, { useState } from "react";
import SideBar from "./Parts/SideBar";
import ProgressSteps from "./Parts/ProgressSteps";
import Optionsss from "./Parts/Optionsss";
import arrow from '../assets/chevron-down.svg'
import FieldCol1 from "./Parts/FieldCol1";
import FieldCol2 from "./Parts/FieldCol2";
import { useNavigate } from "react-router-dom";

const Two = () => {

  const nav = useNavigate();

  return (
    <div className="w-[1440px] h-[1003px] bg-violet-700 justify-start items-start inline-flex">
      <SideBar />

      <div className="grow shrink basis-0 self-stretch bg-purple-50 justify-start items-start flex">
        <div className="grow shrink basis-0 h-[1052px] pt-4 pb-24 justify-start items-center gap-16 flex">
          <div className="grow shrink basis-0 h-[940px] px-8 justify-center items-start flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-12 inline-flex">
              
              <div className="self-stretch h-[940px] flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch h-[860px] flex-col justify-start items-start gap-6 flex">
                  <ProgressSteps page='2' />

                  <div className="self-stretch justify-start items-start gap-8 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                      <div className="self-stretch h-[70px] flex-col justify-center items-start gap-1.5 flex">
                        <p className="text-zinc-700 text-4xl font-bold font-['Inter'] leading-tight">
                          Campus Details
                        </p>
                      </div>
                    </div>
                  </div>
                  <FieldCol1 fieldName={"About Campus"} fieldPlace={"This college is situated in XXX …"}/>

                  <div className="self-stretch justify-start items-start gap-6 inline-flex">
                    <div className="justify-start items-start gap-8 flex">
                      <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                        <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                          <label className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight">
                            Campus Size
                          </label>
                          <div className="self-stretch  bg-white hover:bg-violet-50 rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                                <div className="group w-full">
                                  <button type="button" className="inline-flex px-3.5 py-2.5 text-gray-400 justify-between items-center w-full text-md font-medium  focus:outline-none focus:bg-violet-200">
                                    <p>Spread over 60 acres</p>
                                    <img src={arrow} alt="arrow" className="w-5 h-5 relative" />
                                  </button>
                                  <div className="absolute left-[100px] z-10 text-center w-40 mt-1 bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                                    <div className="py-1">
                                      <p className=" m-2">Option 1</p>
                                      <p className=" m-2">Option 2</p>
                                      <p className=" m-2">Option 3</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[166px] flex-col justify-start items-start gap-1.5 flex">
                    <div className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight">
											Facilities
                    </div>
                    <div className="self-stretch h-[140px] px-3.5 py-3 bg-white rounded-lg border border-gray-900 flex-col justify-start items-start gap-3 flex">
                      <div className=" self-stretch justify-start items-start gap-8 inline-flex">
                        <Optionsss foo={"Playground"} />
                        <Optionsss foo={"Hostels (separate boys and girls)"} />
                        <Optionsss foo={"Electricity 24X7"} />
                        <Optionsss foo={"Canteen"} />
                      </div>
                      <div className="self-stretch justify-start items-start gap-8 inline-flex">
                        <Optionsss foo={"High-Speed Internet"} />
                        <Optionsss foo={"CCTV Coverage"} />
                        <Optionsss foo={"3 tier security"} />
                        <Optionsss foo={"Seminar Hall"} />
                      </div>
                      <div className="self-stretch justify-start items-start gap-8 inline-flex">
                        <Optionsss foo={"Library"} />
                        <Optionsss foo={"Indoor Sports Complex"} />
                        <Optionsss foo={"Digital Classroom"} />
                        <Optionsss foo={"Mess services"} />
                      </div>
                      <div className="self-stretch justify-start items-start gap-8 inline-flex">
                        <Optionsss foo={"Purified Water Cooler"} />
                        <Optionsss foo={"Washing Machines"} />
                        <Optionsss foo={"College Bus Service"} />
                        <Optionsss foo={"Start-up Incubation Centre"} />
                      </div>
                    </div>
                  </div>

                  <FieldCol1 fieldName={"Hostel Life"} fieldPlace={"The hostel culture indeed resembles…"}/>
                  
                </div>
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                  <button onClick={() => {nav('/')}} className="grow shrink basis-0 h-12 px-5 py-3 bg-amber-100 rounded-lg shadow border border-amber-500 justify-center items-center gap-2 flex">
                    <p className="text-amber-500 text-base font-semibold font-['Source Sans Pro'] leading-normal">
                      Back
                    </p>
                  </button>
                  <button onClick={() => {nav('/3')}} className="grow shrink basis-0 h-12 px-5 py-3 bg-amber-500 rounded-lg shadow border justify-center items-center gap-2 flex">
                    <p className="text-white text-base font-semibold font-['Source Sans Pro'] leading-normal">
                      (2/6) Next
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;
