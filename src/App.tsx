import { Erro } from "./pages/Erro"
import { Home } from "./pages/home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Erro />} />
    </Routes>
  </BrowserRouter>
)

export default App
