import React, { useState } from "react"
import { FaSearch, FaPlus } from "react-icons/fa"
import Keyboard from "../components/shared/Keyboard"


const Orders = () => {
  const [selectedCartId, setSelectedCartId] = useState(null)
  const [barcode, setBarcode] = useState("")
  const [focusedInput, setFocusedInput] = useState(null)
  const [showKeyboard, setShowKeyboard] = useState(false)
  const [formData, setFormData] = useState({
    invoiceId: "ABC1203845",
    phone: "",
    name: "",
    gender: "Nam",
    total: "896.000",
    paid: "",
    change: ""
  })

  const cartItems = [
    { id: "VC-005", name: "HB GLUTATHION", qty: 3, price: "500.000" },
    { id: "TT-001", name: "Thuốc tim mạch Concor 5mg", qty: 3, price: "396.000" }
  ]

  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNumpadClick = (val) => {
    if (!focusedInput) return
    if (val === "Xóa") {
      if (focusedInput === "barcode") setBarcode(prev => prev.slice(0, -1))
      else setFormData(prev => ({ ...prev, [focusedInput]: (prev[focusedInput] || "").slice(0, -1) }))
    } else if (val === "OK") {
      console.log("Confirmed", focusedInput)
    } else {
      if (focusedInput === "barcode") setBarcode(prev => prev + val)
      else setFormData(prev => ({ ...prev, [focusedInput]: (prev[focusedInput] || "") + val }))
    }
  }

  return (
    <section className="bg-[#151212] h-[calc(100vh-5rem)] overflow-hidden p-4 flex gap-4 text-white">
      {/* Left Panel */}
      <div className="w-[25%] bg-[#1C1C1C] p-4 rounded-xl overflow-y-auto flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Thông tin thuốc</h2>
        <img
          src="https://via.placeholder.com/200x120"
          alt="Thuốc"
          className="mx-auto mb-4 rounded-md"
        />
        <div className="text-center font-bold text-lg">Concor 5mg</div>
        <div className="text-center text-sm text-gray-400 mb-4">ID: TT - 001</div>
        <label className="block text-sm text-gray-400 mb-1">Thành phần</label>
        <textarea
          readOnly
          className="w-full bg-[#2A2A2A] p-2 rounded text-sm text-gray-300 mb-4"
          rows={4}
          value="Silica colloidal khan, magnesi stearat, crospovidon, cellulos vi tinh thể, tinh bột ngô, hydrophosphat khan."
        />
        <label className="block text-sm text-gray-400 mb-1">Giá tiền</label>
        <input type="text" readOnly value="132.000" className="w-full bg-[#2A2A2A] p-2 rounded text-sm text-gray-300 mb-4" />
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-400">Số lượng</span>
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 bg-orange-500 text-white rounded">-</button>
            <span>1</span>
            <button className="px-2 py-1 bg-orange-500 text-white rounded">+</button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button className="bg-orange-500 text-white rounded py-2 font-semibold">Xem chi tiết thuốc</button>
          <button className="bg-orange-500 text-white rounded py-2 font-semibold">Thêm</button>
        </div>
      </div>

      {/* Center Panel */}
      <div className="w-[45%] bg-[#1C1C1C] p-4 rounded-xl flex flex-col">
        <h2 className="text-lg font-semibold mb-2">Giỏ hàng</h2>
        <input
          type="text"
          placeholder="Nhập mã barcode..."
          value={barcode}
          onFocus={() => setFocusedInput("barcode")}
          onChange={(e) => setBarcode(e.target.value)}
          className="w-full mb-4 bg-[#2A2A2A] text-sm text-gray-300 px-3 py-2 rounded outline-none"
        />

        <div className="flex-1 overflow-y-auto">
          <table className="w-full text-sm text-left text-gray-300">
            <thead className="text-gray-400 border-b border-gray-600">
              <tr>
                <th>ID</th>
                <th>Tên thuốc</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr
                  key={item.id}
                  className={`cursor-pointer border-b border-gray-700 ${
                    selectedCartId === item.id ? "bg-[#2A2A2A] text-orange-500" : "hover:bg-[#2A2A2A]"
                  }`}
                  onClick={() => setSelectedCartId(item.id)}
                >
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2 flex justify-end">
          <button className="bg-orange-500 p-2 rounded">
            <span role="img" aria-label="delete">🗑️</span>
          </button>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[1,2,3,4,5,6,7,8,9,"Xóa",0,"OK"].map((n, i) => (
            <button
              key={i}
              className="bg-[#2A2A2A] text-white py-3 rounded hover:bg-orange-500"
              onClick={() => handleNumpadClick(n)}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {/* Right Panel: Invoice Form */}
      <div className="w-[30%] bg-[#1C1C1C] p-4 rounded-xl overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Hóa đơn</h2>
        <div className="mb-2">
          <label className="text-sm text-gray-400 mb-1 block">Hóa đơn</label>
          <input value={formData.invoiceId} readOnly className="w-full bg-[#2A2A2A] p-2 rounded text-gray-300" />
        </div>
        <div className="mb-2">
          <label className="text-sm text-gray-400 mb-1 block">SĐT</label>
          <div className="flex gap-2">
            <input
              value={formData.phone}
              onFocus={() => setFocusedInput("phone")}
              onChange={e => handleFormChange("phone", e.target.value)}
              className="flex-1 bg-[#2A2A2A] p-2 rounded text-gray-300"
            />
            <button className="bg-[#2A2A2A] px-3 rounded text-gray-300"><FaSearch /></button>
            <button className="bg-[#2A2A2A] px-3 rounded text-gray-300"><FaPlus /></button>
          </div>
        </div>
        <div className="mb-2">
          <label className="text-sm text-gray-400 mb-1 block">Tên KH</label>
          <div className="flex gap-2">
          <input
            value={formData.name}
            onFocus={() => {
              setFocusedInput("name");
              setShowKeyboard(true);
            }}
            onChange={e => handleFormChange("name", e.target.value)}
            className="flex-1 bg-[#2A2A2A] p-2 rounded text-gray-300"
          />
            <select
              value={formData.gender}
              onFocus={() => setFocusedInput("gender")}
              onChange={e => handleFormChange("gender", e.target.value)}
              className="bg-[#2A2A2A] p-2 rounded text-gray-300"
            >
              <option>Nam</option>
              <option>Nữ</option>
            </select>
          </div>
        </div>
        <div className="mb-2">
          <label className="text-sm text-red-500 mb-1 block">Tổng tiền</label>
          <input value={formData.total} readOnly className="w-full bg-[#2A2A2A] p-2 rounded text-orange-500" />
        </div>
        <div className="mb-2">
          <label className="text-sm text-gray-400 mb-1 block">Tiền đưa</label>
          <input
            value={formData.paid}
            onFocus={() => setFocusedInput("paid")}
            onChange={e => handleFormChange("paid", e.target.value)}
            className="w-full bg-[#2A2A2A] p-2 rounded text-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="text-sm text-gray-400 mb-1 block">Tiền thừa</label>
          <input
            value={formData.change}
            onFocus={() => setFocusedInput("change")}
            onChange={e => handleFormChange("change", e.target.value)}
            className="w-full bg-[#2A2A2A] p-2 rounded text-gray-300"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-orange-500 text-white py-2 rounded">Hủy đơn</button>
          <button className="flex-1 bg-orange-500 text-white py-2 rounded">Thanh toán</button>
        </div>
      </div>
      {showKeyboard && (
        <Keyboard
          onKeyPress={(val) => {
            if (val === "←") {
              handleFormChange("name", formData.name.slice(0, -1))
            } else {
              handleFormChange("name", formData.name + val)
            }
          }}
          onClose={() => setShowKeyboard(false)}
        />
      )}
    </section>
  )
}


export default Orders