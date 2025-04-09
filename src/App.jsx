import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Auth, Orders } from "./pages"
import Header from "./components/shared/Header"
import Sidebar from "./components/shared/Sidebar"

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-[#111]">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 p-4 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Navigate to="/invoice/create" />} />
              <Route path="/invoice/create" element={<Orders />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
