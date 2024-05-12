import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'

import SideBar from "./Parts/SideBar";
import ProgressSteps from "./Parts/ProgressSteps";
import calendar from "../assets/calendar.svg";
import FieldCol2 from "./Parts/FieldCol2";
import FieldCol1 from "./Parts/FieldCol1";
import { updateFormData } from "../actions";

const One = () => {

  const [userData, setUserData] = useState({college:'',pin:'',city:''})
  const nav=useNavigate();
  const dispatch = useDispatch()

  const handleData = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value})
  }
  
  const handleClick = () => {
    dispatch(updateFormData('section1',userData));
    console.log(userData);
    nav('/2')
  }

  return (
    <div className="w-[1440px] h-[1065px] bg-violet-700 justify-start items-start inline-flex">
      <SideBar />

      <div className="grow shrink basis-0 self-stretch bg-purple-50 justify-start items-start inline-flex">
        <div className="grow shrink basis-0 h-[1134px] pt-4 pb-24 justify-start items-center gap-16 flex">
          <div className="grow shrink basis-0 h-[1022px] px-8 justify-center items-start flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-12 inline-flex">

              <div className="self-stretch h-[1022px] flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch h-[768px] flex-col justify-start items-start gap-6 flex">
                  <ProgressSteps page="1" />

                  <div className="self-stretch justify-start items-start gap-8 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                      <div className="self-stretch h-[70px] flex-col justify-center items-start gap-1.5 flex">
                        <p className="text-zinc-700 text-4xl font-bold font-['Inter'] leading-tight">
                          Overview
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-6 inline-flex">
                    <div className="grow shrink basis-0 h-[70px] justify-start items-start gap-8 flex">
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                        <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                          <label
                            htmlFor="collegeName"
                            className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight"
                          >
                            College Name
                          </label>
                          <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                            <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                              <input
                                id="collegeName"
                                type="text"
                                placeholder="“Delhi University”"
                                className="grow shrink basis-0 text-zinc-700 text-base font-normal font-['Inter'] leading-normal focus:outline-none"
                                value={userData.college} onChange={handleData} name="college"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-52 h-[70px] justify-end items-start gap-8 flex">
                      <div className="w-52 h-[70px] flex-col justify-start items-start gap-1.5 inline-flex">
                        <div className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight">
                          Year Founded
                        </div>
                        <div className="self-stretch h-11 flex-col justify-start items-end gap-2 flex">
                          <div className="self-stretch h-11 px-4 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-center items-center gap-2 inline-flex">
                            <img 
                              src={calendar}
                              alt="calendar"
                              className="w-5 h-5 relative"
                            />
                            <p className="text-gray-500 text-sm font-semibold font-['Inter'] leading-tight">
                              Select date
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <FieldCol1
                    fieldName={"College Overview"}
                    fieldPlace={"This college is situated in XXX …."}
                  />

                  <FieldCol2
                    col1Name={"Address"}
                    col1Value={"Prabandhnagar"}
                    col2Name={"Landmark"}
                    col2Value={"Near SRk DAV Pub"}
                  />

                  <div className="self-stretch justify-start items-start gap-6 inline-flex">
                    <div className="grow shrink basis-0 h-[70px] justify-start items-start gap-8 flex">
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                        <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                          <label
                            htmlFor="pincode"
                            className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight"
                          >
                            Pincode
                          </label>
                          <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                            <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                              <input
                                id="pincode"
                                type="text"
                                placeholder="8253XX"
                                className="grow shrink basis-0 text-zinc-700 text-base font-normal font-['Inter'] leading-normal focus:outline-none"
                                value={userData.pin} onChange={handleData} name="pin"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grow shrink basis-0 h-[70px] justify-start items-start gap-8 flex">
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                        <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                          <label
                            htmlFor="city"
                            className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight"
                          >
                            City
                          </label>
                          <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                            <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                              <input
                                id="city"
                                type="text"
                                placeholder="Ranchi"
                                className="grow shrink basis-0 text-zinc-700 text-base font-normal font-['Inter'] leading-normal focus:outline-none"
                                value={userData.city} onChange={handleData} name="city"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-start gap-8 flex">
                      <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                        <div className="w-[187px] h-[70px] flex-col justify-start items-start gap-1.5 inline-flex">
                          <label htmlFor="district" className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight">
                            District
                          </label>
                          <div className="w-[187px] flex-col justify-start items-start flex">
                            <div className="h-11 px-4 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-center items-center gap-2 inline-flex">
                              <select className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight focus:outline-none bg-white ">
                                <option defaultValue={"District 0"}>Select your district</option>
                                <option value={"District 1"}>1</option>
                                <option value={"District 2"}>2</option>
                                <option value={"District 3"}>3</option>
                                <option value={"District 4"}>4</option>
                                <option value={"District 5"}>5</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-start gap-8 flex">
                      <div className="flex-col justify-start items-start gap-1.5 inline-flex">
                        <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                          <label
                            htmlFor="state"
                            className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight"
                          >
                            State
                          </label>
                          <div className="w-[174px] flex-col justify-start items-start flex">
                            <div className="h-11 px-4 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-center items-center gap-2 inline-flex">
                              <select className="text-slate-700 text-sm font-medium font-['Inter'] leading-tight focus:outline-none bg-white">
                                <option defaultValue={"State 0"}>Select your state</option>
                                <option value={"State 1"}>1</option>
                                <option value={"State 2"}>2</option>
                                <option value={"State 3"}>3</option>
                                <option value={"State 4"}>4</option>
                                <option value={"State 5"}>5</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-6 inline-flex">
                    <div className="w-[305.50px] flex-col justify-start items-start inline-flex">
                      <div className="self-stretch h-[70px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                          <label
                            htmlFor="aff"
                            className="text-slate-700 text-base font-semibold font-['Inter'] leading-tight"
                          >
                            Affiliated by
                          </label>
                          <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                            <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                              <input
                                id="aff"
                                type="text"
                                placeholder="Delhi University"
                                className="text-gray-500 text-base font-normal font-['Inter'] leading-normal focus:outline-none"
                              />
                            </div>
                            <div className="w-5 h-5 relative" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[305.50px] flex-col justify-start items-start inline-flex">
                      <div className="self-stretch h-[70px] flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                          <label
                            htmlFor="acc"
                            className="text-slate-700 text-base font-semibold font-['Inter'] leading-tight"
                          >
                            Accreditations
                          </label>
                          <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                            <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                              <input
                                id="acc"
                                type="text"
                                placeholder="UGC"
                                className="text-gray-500 text-base font-normal font-['Inter'] leading-normal focus:outline-none"
                              />
                            </div>
                            <div className="w-5 h-5 relative" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[305.50px]" />
                  </div>
                </div>
                <div className="self-stretch h-[142px] flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch h-[118px] p-6 bg-purple-100 rounded-lg flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch justify-start items-start gap-6 inline-flex">
                      <div className="h-[70px] justify-start items-start gap-8 flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                          <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                            <label
                              htmlFor="rank1"
                              className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight"
                            >
                              Ranking 1
                            </label>
                            <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                              <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                                <input
                                  id="rank1"
                                  type="text"
                                  placeholder="Ranking 1 Name"
                                  className="grow shrink basis-0 text-zinc-700 text-base font-normal font-['Inter'] leading-normal focus:outline-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[70px] justify-start items-start gap-8 flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                          <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                            <label
                              htmlFor="rankValue"
                              className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight">
                              Ranking 1 value
                            </label>
                            <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                              <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                                <input
                                  id="rankValue"
                                  type="Number"
                                  placeholder="12"
                                  className="grow shrink basis-0 text-zinc-700 text-base font-normal font-['Inter'] leading-normal focus:outline-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-violet-700 text-base font-semibold font-['Source Sans Pro'] leading-tight">
                    + Add Ranking
                  </p>
                </div>
                <div className="self-stretch h-12 flex-col justify-start items-start gap-4 flex">
                  <button onClick={handleClick} type="submit" className="self-stretch px-5 py-3 bg-amber-500 rounded-lg shadow border justify-center items-center gap-2 inline-flex">
                    <p className="text-white text-base font-semibold font-['Inter'] leading-normal">
                      (1/6) Next
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

export default One;
