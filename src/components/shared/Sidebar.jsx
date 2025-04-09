import React from 'react'
import logo from "../../assets/logo.png"
import { FaFileInvoice, FaSearch, FaChartBar, FaUser, FaPills, FaUsersCog, FaClock, FaCog, FaChevronDown } from "react-icons/fa"
import { MdAddBox } from "react-icons/md"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside className="flex h-screen max-w-[410px]">
      <div className="w-64 bg-[#120C0D] p-4 flex flex-col text-sm">
      <div className="flex items-center gap-2">
            <img src={logo} alt="HUY PHUC PHARMA Logo" className="w-34 h-14 object-contain" />
        </div>
        <nav className="space-y-6 text-[#E3E3E3] text-sm pt-6">
            <SidebarSection
            label="Hóa đơn"
            icon={<FaFileInvoice />}
            items={[
                { to: "/invoice/create", label: "Lập hóa đơn" },
                { to: "/invoice/list", label: "Danh sách hóa đơn"},
            ]}
            />
            <SidebarSection
            label="Thống kê"
            icon={<FaChartBar />}
            items={[
                { to: "/stats/sales", label: "Báo cáo bán hàng" },
                { to: "/stats/inventory", label: "Tồn kho" },
            ]}
            />
            <SidebarSection
            label="Khách hàng"
            icon={<FaUser />}
            items={[
                { to: "/customers/list", label: "Danh sách KH" },
                { to: "/customers/groups", label: "Nhóm KH" },
            ]}
            />
            <SidebarSection
            label="Thuốc"
            icon={<FaPills />}
            items={[
                { to: "/drugs/list", label: "Danh sách thuốc" },
                { to: "/drugs/categories", label: "Danh mục thuốc" },
            ]}
            />
            <SidebarSection
            label="Quản lí nhân viên"
            icon={<FaUsersCog />}
            items={[
                { to: "/staff/list", label: "Nhân viên" },
                { to: "/staff/roles", label: "Phân quyền" },
            ]}
            />
            <SidebarSection
            label="Ca làm việc"
            icon={<FaClock />}
            items={[
                { to: "/shifts/schedule", label: "Lịch làm" },
                { to: "/shifts/logs", label: "Lịch sử" },
            ]}
            />
            <SidebarSection
            label="Tài khoản"
            icon={<FaCog />}
            items={[
                { to: "/account/profile", label: "Thông tin cá nhân" },
                { to: "/account/settings", label: "Cài đặt" },
            ]}
            />
        </nav>
      </div>
    </aside>
  )
}

const SidebarSection = ({ label, icon, items }) => {
    const [open, setOpen] = useState(false)
    const { pathname } = useLocation()
  
    const isActive = items.some(item => pathname.startsWith(item.to))
  
    return (
      <div>
        <div
          onClick={() => setOpen(!open)}
          className={`flex items-center justify-between px-2 py-2 cursor-pointer hover:text-orange-400 ${
            isActive ? "text-orange-400 font-semibold" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-base">{icon}</span>
            <span>{label}</span>
          </div>
          <FaChevronDown
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </div>
        {open && (
          <div className="ml-6 mt-1 space-y-1">
            {items.map(({ to, label, icon }, i) => (
              <Link
                key={i}
                to={to}
                className={`flex items-center gap-2 px-2 py-1 rounded-md transition-colors hover:text-orange-400 ${
                  pathname === to ? "text-orange-400" : "text-[#E3E3E3]"
                }`}
              >
                {icon && <span className="text-sm">{icon}</span>}
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

export default Sidebar