import React from 'react'

import logo from '../../assets/SideBar/Logomark.svg'
import home from '../../assets/SideBar/home-line.svg'
import barChart from '../../assets/SideBar/bar-chart-square-02.svg'
import layers from '../../assets/SideBar/layers-three-01.svg'
import pieChart from '../../assets/SideBar/pie-chart-03.svg'
import users from '../../assets/SideBar/users-01.svg'
import lifeBuoy from '../../assets/SideBar/life-buoy-01.svg'
import settings from '../../assets/SideBar/settings-01.svg'
import avatar from '../../assets/SideBar/Avatar.svg'

const SideBar = () => {
  return (
    <div className="w-[82px] h-[798px] bg-[#2c1c5f] justify-start items-start inline-flex">
      <div className="w-[81px] self-stretch flex-col justify-between items-start inline-flex">
				<div className="self-stretch h-[360px] pt-8 flex-col justify-start items-start gap-6 flex">
					<div className="self-stretch h-8 pl-6 pr-5 flex-col justify-start items-start flex">
						<div className="shadow justify-start items-start inline-flex">
							<div className="w-8 h-8 bg-gradient-to-b from-white to-gray-300 rounded-lg justify-center items-center flex">
								<img src={logo} alt='logo' className="w-8 h-8 relative flex-col justify-start items-start flex" />
							</div>
						</div>
					</div>
					<div className="self-stretch h-[272px] px-4 flex-col justify-start items-start gap-2 flex">
						<div className="p-3 bg-[#2c1c5f] rounded-md justify-start items-start gap-2 inline-flex hover:bg-[#7F56D9] ">
								<img src={home} alt='' className="w-6 h-6 relative"/>
						</div>
						<div className="p-3 bg-[#2c1c5f] rounded-md justify-start items-start gap-2 inline-flex hover:bg-[#7F56D9] ">
								<img src={barChart} alt='' className="w-6 h-6 relative"/>
						</div>
						<div className="p-3 bg-[#2c1c5f] rounded-md justify-start items-start gap-2 inline-flex hover:bg-[#7F56D9] ">
								<img src={layers} alt='' className="w-6 h-6 relative"/>
						</div>
						<div className="p-3 bg-[#2c1c5f] rounded-md justify-start items-start gap-2 inline-flex hover:bg-[#7F56D9] ">
								<img src={pieChart} alt='' className="w-6 h-6 relative"/>
						</div>
						<div className="p-3 bg-[#2c1c5f] rounded-md justify-start items-start gap-2 inline-flex hover:bg-[#7F56D9] ">
							<img src={users} alt='users' className="w-6 h-6 relative"/>
						</div>
					</div>
				</div>
				<div className="self-stretch h-[200px] px-4 pb-6 flex-col justify-start items-start gap-6 flex">
					<div className="self-stretch h-[104px] flex-col justify-start items-start gap-2 flex">
						<div className="p-3 bg-[#2c1c5f] rounded-md justify-start items-start gap-2 inline-flex hover:bg-[#7F56D9] ">
							<img src={lifeBuoy} className="w-6 h-6 relative" />
						</div>
						<div className="p-3 bg-[#2c1c5f] rounded-md justify-start items-start gap-2 inline-flex hover:bg-[#7F56D9] ">
							<img src={settings} className="w-6 h-6 relative" />
						</div>
					</div>
					<img className="w-12 h-12 rounded-[200px]" src={avatar} />
				</div>
      </div>
  </div>
  )
}

export default SideBar