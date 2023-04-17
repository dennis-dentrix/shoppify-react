import { useState } from "react";
import "./App.css";
import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components/Layouts/Header";
import { Footer } from "./components/Layouts/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
        <AllRoutes />
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
