import React from "react"

const Keyboard = ({ onKeyPress, onClose }) => {
  const layout = [
    "Q W E R T Y U I O P",
    "A S D F G H J K L",
    "Z X C V B N M"
  ]

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[#1C1C1C] p-4 rounded-xl shadow-lg w-[90vw] max-w-xl">
        {layout.map((row, i) => (
          <div key={i} className="flex justify-center gap-2 mb-2">
            {row.split(" ").map(key => (
              <button
                key={key}
                onClick={() => onKeyPress(key)}
                className="bg-[#2A2A2A] hover:bg-orange-500 text-white px-4 py-2 rounded"
              >
                {key}
              </button>
            ))}
          </div>
        ))}

        <div className="flex gap-2 mt-2">
          <button
            onClick={() => onKeyPress(" ")}
            className="flex-1 bg-[#2A2A2A] hover:bg-orange-500 text-white py-2 rounded"
          >
            Space
          </button>
          <button
            onClick={() => onKeyPress("←")}
            className="bg-red-600 hover:bg-red-700 text-white px-4 rounded"
          >
            ←
          </button>
          <button
            onClick={onClose}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 rounded"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

export default Keyboard
