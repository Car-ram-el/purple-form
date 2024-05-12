import React, { useState } from "react";
import SideBar from "./Parts/SideBar";
import ProgressSteps from "./Parts/ProgressSteps";
import FieldCol1 from "./Parts/FieldCol1";
import Optionsss from "./Parts/Optionsss";
import FieldCol2 from "./Parts/FieldCol2";
import arrow from "../assets/chevron-down.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateFormData } from "../actions";

const Three = () => {
  const [userData, setUserData] = useState({ course: "" });
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    dispatch(updateFormData("section3", userData));
    console.log(userData);
    nav("/4");
  };

  return (
    <div className="w-[1440px] h-[1170px] bg-violet-700 justify-start items-start inline-flex">
      <SideBar />

      <div className="grow shrink basis-0 self-stretch bg-purple-50 justify-start items-start flex">
        <div className="grow shrink basis-0 h-[1220px] pt-4 pb-24 justify-start items-center gap-16 flex">
          <div className="grow shrink basis-0 h-[1108px] px-8 justify-center items-start flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-12 inline-flex">
              <div className="self-stretch h-[1108px] flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch h-[392px] flex-col justify-start items-start gap-6 flex">
                  <ProgressSteps page="3" />

                  <div className="self-stretch justify-start items-start gap-8 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                      <div className="self-stretch h-[70px] flex-col justify-center items-start gap-1.5 flex">
                        <p className="text-zinc-700 text-4xl font-bold font-['Source Sans Pro'] leading-tight">
                          Course Details
                        </p>
                      </div>
                    </div>
                  </div>
                  <FieldCol1 fieldName={"Courses Offered"} fieldPlace={"Our college considers the financial…."}/>
                </div>

                <div className="self-stretch h-[604px] flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch h-[580px] p-6 bg-purple-100 rounded-lg flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch justify-start items-start gap-6 inline-flex">
                      <div className="grow shrink basis-0 h-[70px] justify-start items-start gap-8 flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                          <div className="self-stretch h-[70px] flex-col justify-start items-start gap-2 flex">
                            <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                              <label htmlFor="course" className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight">
                                Course Name
                              </label>
                              <div className="self-stretch  bg-white hover:bg-violet-50 rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                                <div className="group w-full">
                                  <button type="button" className="inline-flex px-3.5 py-2.5 text-gray-400 justify-between items-center w-full text-md font-medium  focus:outline-none focus:bg-violet-200">
                                    <p>B.Tech.</p>
                                    <img src={arrow} alt="arrow" className="w-5 h-5 relative" />
                                  </button>
                                  <div className="absolute left-[113px] z-10 text-center w-40 mt-1 bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
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

                      <div className="h-[70px] justify-start items-start gap-8 flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                          <div className="self-stretch h-[70px] flex-col justify-start items-start gap-2 flex">
                            <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                              <label
                                htmlFor="duration"
                                className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight"
                              >
                                Course Duration
                              </label>
                              <div className="self-stretch  bg-white hover:bg-violet-50 rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                                <div className="group w-full">
                                  <button type="button" className="inline-flex px-3.5 py-2.5 text-gray-400 justify-between items-center w-full text-md font-medium  focus:outline-none focus:bg-violet-200">
                                    <p>4 years.</p>
                                    <img src={arrow} alt="arrow" className="w-5 h-5 relative" />
                                  </button>
                                  <div className="absolute left-[1243px] z-10 text-center w-40 mt-1 bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
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
                    </div>
                    <div className="self-stretch h-40 flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch h-40 flex-col justify-start items-start gap-1.5 flex">
                        <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-1.5 flex">
                          <label
                            htmlFor="specs"
                            className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight"
                          >
                            Course Specialization 
                          </label>
                          <div className="self-stretch h-[140px] px-3.5 py-3 bg-white rounded-lg border border-gray-900 flex-col justify-start items-start gap-3 flex">
                            <div className="self-stretch justify-start items-start gap-8 inline-flex">
                              <Optionsss foo={"Name"} />
                              <Optionsss foo={"Name"} />
                              <Optionsss foo={"Name"} />
                              <Optionsss foo={"Name"} />
                            </div>
                            <div className="self-stretch justify-start items-start gap-8 inline-flex">
                              <Optionsss foo={"Name"} />
                              <Optionsss foo={"Name"} />
                              <Optionsss foo={"Name"} />
                              <Optionsss foo={"Name"} />
                            </div>
                            <div className="self-stretch justify-start items-start gap-8 inline-flex">
                              <Optionsss foo={"Name"} />
                              <Optionsss foo={"Name"} />
                              <Optionsss foo={"Name"} />
                              <Optionsss foo={"Name"} />
                            </div>
                            <div className="self-stretch justify-start items-start gap-8 inline-flex">
                              <Optionsss foo={"Name"} />
                              <Optionsss foo={"Name"} />
                              <Optionsss foo={"Name"} />
                              <Optionsss foo={"Name"} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <FieldCol2
                      col1Name={"Course Fee"}
                      col1Value={"INR 5,00,000"}
                      col2Name={"Admission Criteria"}
                      col2Value={"Admission Criteria"}
                    />
                    <FieldCol1
                      fieldName={"Course Detail"}
                      fieldPlace={"Our CSE in B.tech. provides …"}
                    />
                  </div>
                  <p className="text-violet-700 text-base font-semibold font-['Source Sans Pro'] leading-tight">
                    + Add course
                  </p>
                </div>
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                  <button
                    onClick={() => {
                      nav("/2");
                    }}
                    className="grow shrink basis-0 h-12 px-5 py-3 bg-amber-100 rounded-lg shadow border border-amber-500 justify-center items-center gap-2 flex"
                  >
                    <p className="text-amber-500 text-base font-semibold font-['Source Sans Pro'] leading-normal">
                      Back
                    </p>
                  </button>
                  <button
                    onClick={handleClick}
                    className="grow shrink basis-0 h-12 px-5 py-3 bg-amber-500 rounded-lg shadow border justify-center items-center gap-2 flex"
                  >
                    <p className="text-white text-base font-semibold font-['Source Sans Pro'] leading-normal">
                      (3/6) Next
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

export default Three;
