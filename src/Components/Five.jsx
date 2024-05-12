import React, {useState} from "react";
import SideBar from "./Parts/SideBar";
import ProgressSteps from "./Parts/ProgressSteps";
import cloud from '../assets/upload-cloud-02.svg'
import plus from '../assets/plus.svg';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateFormData } from "../actions";

const Five = () => {
  const [userData, setUserData] = useState({link:''});
  const nav = useNavigate()
  const dispatch = useDispatch();

  const handleData = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value})
  }

  const handleClick = () => {
    dispatch(updateFormData('section5',userData))
    console.log(userData);
    nav('/6')
  }

  return (
    <div className="w-[1440px] h-[902px] bg-violet-700 justify-start items-start inline-flex">
      <SideBar />

      <div className="grow shrink basis-0 self-stretch bg-purple-50 justify-start items-start flex">
        <div className="grow shrink basis-0 h-[935px] pt-4 pb-24 justify-start items-center gap-16 flex">
          <div className="grow shrink basis-0 h-[823px] px-8 justify-center items-start flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-12 inline-flex">

              <div className="self-stretch h-[823px] flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch h-[358px] flex-col justify-start items-start gap-6 flex">
                  <ProgressSteps page={5}/>

                  <div className="self-stretch justify-start items-start gap-8 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                      <div className="self-stretch h-[70px] flex-col justify-center items-start gap-1.5 flex">
                        <p className="text-zinc-700 text-4xl font-bold font-['Inter'] leading-tight">
                          Gallery & Video
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="justify-start items-start gap-6 inline-flex">
                    <div className="w-[512px] flex-col justify-start items-start gap-4 inline-flex">
                      <div className="self-stretch h-[126px] px-6 py-4 bg-gray-50 rounded-xl border border-gray-900 flex-col justify-start items-center gap-1 flex">
                        <div className="self-stretch h-[94px] flex-col justify-start items-center gap-3 flex">
                          <div className="w-10 h-10 p-2.5 bg-gray-100 rounded-[28px] border-4 border-gray-50 justify-center items-center inline-flex">
                            <img src={cloud} alt="cloud" className="w-5 h-5 relative flex-col justify-start items-start flex" />
                          </div>
                          <div className="self-stretch h-[42px] flex-col justify-start items-center gap-1 flex">
                            <div className="self-stretch justify-center items-start gap-1 inline-flex">
                              <div className="justify-center items-center gap-2 flex">
                                <p className="text-gray-900 text-sm font-semibold font-['Source Sans Pro'] leading-tight">
                                  Click to upload College Profile Photo
                                </p>
                              </div>
                              <p className="text-zinc-700 text-sm font-normal font-['Source Sans Pro'] leading-tight">
                                or drag and drop
                              </p>
                            </div>
                            <p className="self-stretch text-center text-zinc-700 text-xs font-normal font-['Source Sans Pro'] leading-[18px]">
                              SVG, PNG or JPG(max. 800x400px)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[512px] flex-col justify-start items-start gap-4 inline-flex">
                      <div className="self-stretch h-[126px] px-6 py-4 bg-gray-50 rounded-xl border border-gray-900 flex-col justify-start items-center gap-1 flex">
                        <div className="self-stretch h-[94px] flex-col justify-start items-center gap-3 flex">
                          <div className="w-10 h-10 p-2.5 bg-gray-100 rounded-[28px] border-4 border-gray-50 justify-center items-center inline-flex">
                            <img src={cloud} alt="cloud" className="w-5 h-5 relative flex-col justify-start items-start flex" />
                          </div>
                          <div className="self-stretch h-[42px] flex-col justify-start items-center gap-1 flex">
                            <div className="self-stretch justify-center items-start gap-1 inline-flex">
                              <div className="justify-center items-center gap-2 flex">
                                <p className="text-gray-900 text-sm font-semibold font-['Source Sans Pro'] leading-tight">
                                  Click to upload College Logo
                                </p>
                              </div>
                              <p className="text-zinc-700 text-sm font-normal font-['Source Sans Pro'] leading-tight">
                                or drag and drop
                              </p>
                            </div>
                            <p className="self-stretch text-center text-zinc-700 text-xs font-normal font-['Source Sans Pro'] leading-[18px]">
                              SVG, PNG or JPG(max. 800x400px)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[155px] flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch h-[155px] flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch justify-start items-start gap-8 inline-flex">
                      <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                        <div className="self-stretch h-5 flex-col justify-start items-start gap-1.5 flex">
                          <p className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight">
                            College Photo
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[131px] p-6 bg-purple-100 rounded-lg flex-col justify-start items-start gap-6 flex">
                      <div className="pl-[31px] pr-[30px] pt-5 pb-[19px] bg-gray-200 rounded-lg justify-center items-center inline-flex">
                        <div className="self-stretch flex-col justify-center items-center inline-flex">
                          <img src={plus} alt="plus" className="w-6 h-6 relative" />
                          <p className="text-violet-700 text-sm font-semibold font-['Source Sans Pro'] leading-tight">
                            Click to Add Photos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[166px] flex-col justify-start items-start gap-1 flex">
                  <div className="self-stretch h-[142px] flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch h-[142px] flex-col justify-start items-start gap-1 flex">
                      <div className="self-stretch justify-start items-start gap-8 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                          <div className="self-stretch h-5 flex-col justify-start items-start gap-1.5 flex">
                            <div className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight">
                              College Video
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[118px] p-6 bg-purple-100 rounded-lg flex-col justify-start items-start gap-6 flex">
                        <div className="self-stretch justify-start items-start gap-8 inline-flex">
                          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                            <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                              <label htmlFor="video" className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight">
                                Paste your video link
                              </label>
                              <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                                <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                                  <input id="video" type="text" placeholder="https link" className="grow shrink basis-0 text-zinc-700 text-base font-normal font-['Inter'] leading-normal focus:outline-none"
                                  value={userData.link} onChange={handleData} name="link"/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-violet-700 text-base font-semibold font-['Source Sans Pro'] leading-tight">
                    + Add college video
                  </p>
                </div>
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                  <button onClick={() => {nav('/4')}} className="grow shrink basis-0 h-12 px-5 py-3 bg-amber-100 rounded-lg shadow border border-amber-500 justify-center items-center gap-2 flex">
                    <p className="text-amber-500 text-base font-semibold font-['Source Sans Pro'] leading-normal">
                      Back
                    </p>
                  </button>
                  <button onClick={handleClick} className="grow shrink basis-0 h-12 px-5 py-3 bg-amber-500 rounded-lg shadow border justify-center items-center gap-2 flex">
                    <p className="text-white text-base font-semibold font-['Source Sans Pro'] leading-normal">
                      (5/6) Next
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

export default Five;
