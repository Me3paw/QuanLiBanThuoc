import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Auth, Orders } from "./pages"
import Header from "./components/shared/Header"
import Sidebar from "./components/shared/Sidebar"
function App() {

  return (
    <>
     <Router>
      <div className="flex min-h-screen bg-[#111] text-white">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="flex-1 p-4 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
