import React, { useState } from "react";
import axios from 'axios';

import SideBar from "./Parts/SideBar";
import ProgressSteps from "./Parts/ProgressSteps";
import { useDispatch, useSelector } from "react-redux";

const Six = () => {

  const userData = useSelector(state => state.formData);
  const dispatch = useDispatch();

  const handleSubmit = async() => {
    try {
      // const res = await axios.post('http://localhost:5000/form',userData);
      console.log('Form submitted',res);
    } catch (err) {
      console.log('Error before submitting',err);
    }
  }

  return (
    <div className="w-[1440px] h-[798px] bg-violet-700 justify-start items-start inline-flex">
      <SideBar />

      <div className="grow shrink basis-0 self-stretch bg-purple-50 justify-start items-start flex">
        <div className="grow shrink basis-0 h-[856px] pt-4 pb-24 justify-start items-center gap-16 flex">
          <div className="grow shrink basis-0 h-[744px] px-8 justify-center items-start flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-12 inline-flex">

              <form onSubmit={handleSubmit} className="self-stretch h-[744px] flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch h-[664px] flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch h-[640px] flex-col justify-start items-start gap-6 flex">
                    <ProgressSteps page={6}/>

                    <div className="self-stretch justify-start items-start gap-8 inline-flex">
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                        <div className="self-stretch h-[70px] flex-col justify-center items-start gap-1.5 flex">
                          <p className="text-zinc-700 text-4xl font-bold font-['Source Sans Pro'] leading-tight">
                            Frequently Asked Questions
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <p className="text-zinc-700 text-base font-semibold font-['Inter'] leading-normal">
                        1.
                      </p>
                      <div className="grow shrink basis-0 px-3.5 py-3 bg-white rounded-lg border border-gray-300 flex-col justify-start items-start gap-3 inline-flex">
                        <div className="h-24 flex-col justify-start items-start gap-6 flex">
                          <div className="self-stretch h-24 flex-col justify-start items-start gap-2 flex">
                            <div className="flex-col justify-start items-start gap-2 flex">
                              <div className="w-[1252px] h-11 flex-col justify-start items-start gap-1.5 flex">
                                <div className="self-stretch h-11 flex-col justify-start items-start gap-1.5 flex">
                                  <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                                      <p className="grow shrink basis-0 text-zinc-700 text-base font-semibold font-['Inter'] leading-normal">
                                        Question 1
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="w-[1252px] h-11 flex-col justify-start items-start gap-1.5 flex">
                                <div className="self-stretch h-11 flex-col justify-start items-start gap-1.5 flex">
                                  <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                                      <p className="grow shrink basis-0 text-zinc-700 text-base font-normal font-['Inter'] leading-normal">
                                        “Answer”
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="text-zinc-700 text-base font-semibold font-['Inter'] leading-normal">
                        2.
                      </div>
                      <div className="grow shrink basis-0 px-3.5 py-3 bg-white rounded-lg border border-gray-300 flex-col justify-start items-start gap-3 inline-flex">
                        <div className="h-24 flex-col justify-start items-start gap-6 flex">
                          <div className="self-stretch h-24 flex-col justify-start items-start gap-2 flex">
                            <div className="flex-col justify-start items-start gap-2 flex">
                              <div className="w-[1252px] h-11 flex-col justify-start items-start gap-1.5 flex">
                                <div className="self-stretch h-11 flex-col justify-start items-start gap-1.5 flex">
                                  <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                                      <p className="grow shrink basis-0 text-zinc-700 text-base font-semibold font-['Inter'] leading-normal">
                                        Question 2
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="w-[1252px] h-11 flex-col justify-start items-start gap-1.5 flex">
                                <div className="self-stretch h-11 flex-col justify-start items-start gap-1.5 flex">
                                  <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                                      <p className="grow shrink basis-0 text-zinc-700 text-base font-normal font-['Inter'] leading-normal">
                                        “Answer”
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-1 inline-flex">
                      <div className="text-zinc-700 text-base font-semibold font-['Inter'] leading-normal">
                        3.
                      </div>
                      <div className="grow shrink basis-0 px-3.5 py-3 bg-white rounded-lg border border-gray-300 flex-col justify-start items-start gap-3 inline-flex">
                        <div className="h-24 flex-col justify-start items-start gap-6 flex">
                          <div className="self-stretch h-24 flex-col justify-start items-start gap-2 flex">
                            <div className="flex-col justify-start items-start gap-2 flex">
                              <div className="w-[1252px] h-11 flex-col justify-start items-start gap-1.5 flex">
                                <div className="self-stretch h-11 flex-col justify-start items-start gap-1.5 flex">
                                  <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                                      <p className="grow shrink basis-0 text-zinc-700 text-base font-semibold font-['Inter'] leading-normal">
                                        Question 3
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="w-[1252px] h-11 flex-col justify-start items-start gap-1.5 flex">
                                <div className="self-stretch h-11 flex-col justify-start items-start gap-1.5 flex">
                                  <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                                    <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                                      <p className="grow shrink basis-0 text-zinc-700 text-base font-normal font-['Inter'] leading-normal">
                                        “Answer”
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-violet-700 text-base font-semibold font-['Source Sans Pro'] leading-tight mt-3">
                    + Add question
                  </p>
                </div>
                <div className="self-stretch h-12 flex-col justify-start items-start gap-4 flex">
                  <button type="submit" className="self-stretch px-5 py-3 bg-amber-500 rounded-lg shadow border justify-center items-center gap-2 inline-flex">
                    <p className="text-white text-base font-semibold font-['Source Sans Pro'] leading-normal">
                      (6/6) Preview
                    </p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Six;
