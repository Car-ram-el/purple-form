import React, {useState} from "react";
import SideBar from "./Parts/SideBar";
import ProgressSteps from "./Parts/ProgressSteps";
import FieldCol1 from "./Parts/FieldCol1";
import FieldCol2 from "./Parts/FieldCol2";
import arrow from "../assets/chevron-down.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateFormData } from "../actions";

const Four = () => {
  const [userData, setUserData] = useState({rec:''});
  const nav = useNavigate()
  const dispatch = useDispatch()

  const handleData = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value})
  }

  const handleClick = () => {
    dispatch(updateFormData('section4',userData))
    console.log(userData);
    nav('/5')
  }

  return (
    <div className="w-[1440px] h-[798px] bg-violet-700 justify-start items-start inline-flex">
      <SideBar />

      <div className="grow shrink basis-0 self-stretch bg-purple-50 justify-start items-start flex">
        <div className="grow shrink basis-0 h-[796px] pt-4 pb-24 justify-start items-center gap-16 flex">
          <div className="grow shrink basis-0 h-[684px] px-8 justify-center items-start flex">
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-12 inline-flex">

              <div className="self-stretch h-[684px] flex-col justify-start items-start gap-8 flex">
                <div className="self-stretch h-[604px] flex-col justify-start items-start gap-6 flex">
                  <ProgressSteps page='4'/>

                  <div className="self-stretch justify-start items-start gap-8 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
                      <div className="self-stretch h-[70px] flex-col justify-center items-start gap-1.5 flex">
                        <p className="text-zinc-700 text-4xl font-bold font-['Inter'] leading-tight">
                          Placements
                        </p>
                      </div>
                    </div>
                  </div>

                  <FieldCol1 fieldName={"Placement Intro"} fieldPlace={"We are delighted to share.."}/>
                  
                  <FieldCol2 col1Name={"Highest Placement last year"} col1Value={"INR 20 LPA"} col2Name={"Average Placement Last Year"} col2Value={"INR 13 LPA"}/>

                  <div className="self-stretch justify-start items-start gap-6 inline-flex">
                    <div className="w-[415.33px] flex-col justify-start items-start gap-1 inline-flex">
                      <div className="self-stretch justify-start items-start gap-8 inline-flex">
                        <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                          <div className="self-stretch h-[70px] flex-col justify-start items-start gap-2 flex">
                            <div className="self-stretch h-[70px] flex-col justify-start items-start gap-1.5 flex">
                              <label htmlFor="topRecruiters" className="text-zinc-700 text-base font-semibold font-['Inter'] leading-tight">
                                Top Recruiters
                              </label>
                              <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-900 justify-start items-center gap-2 inline-flex">
                                <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
                                  <input id="topRecruiters" type="text" placeholder="Amazon" className="text-zinc-700 text-base font-normal font-['Inter'] leading-normal focus:outline-none"
                                  value={userData.rec} onChange={handleData} name="rec"/>
                                </div>
                                <img src={arrow} alt="arrow" className="w-5 h-5 relative" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-violet-700 text-base font-semibold font-['Source Sans Pro'] leading-tight">
                        + Add recruiter
                      </p>
                    </div>
                  </div>
                </div>
                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                  <button onClick={() => {nav('/3')}} className="grow shrink basis-0 h-12 px-5 py-3 bg-amber-100 rounded-lg shadow border border-amber-500 justify-center items-center gap-2 flex">
                    <p className="text-amber-500 text-base font-semibold font-['Source Sans Pro'] leading-normal">
                      Back
                    </p>
                  </button>
                  <button onClick={handleClick} className="grow shrink basis-0 h-12 px-5 py-3 bg-amber-500 rounded-lg shadow border justify-center items-center gap-2 flex">
                    <p className="text-white text-base font-semibold font-['Source Sans Pro'] leading-normal">
                      (4/6) Next
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

export default Four;
