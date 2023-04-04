import { useState } from 'react'
import './App.css'
import { AllRoutes } from './routes/AllRoutes'
import { Header } from './components/Layouts/Header';
import { Footer } from './components/Layouts/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
          <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
