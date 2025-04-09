import React from 'react'
import { FaBell } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-8 bg-[#120C0D]">

      {/* User profile */}
      <div className="flex items-center gap-4 ml-auto">
        <div className="bg-[#120C0D] rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>
        <div className="text-right">
          <div className="font-semibold text-lg text-[#E3E3E3]">Nguyễn Hồng Phúc</div>
          <div className="text-sm text-[#E3E3E3]">Quản lí</div>
        </div>
        <img
          src="https://via.placeholder.com/40"
          alt="User avatar"
          className="w-12 h-12 rounded-full border-2 border-orange-500"
        />
      </div>
    </header>
  )
}

export default Header