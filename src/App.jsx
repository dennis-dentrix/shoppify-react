import { AllRoutes } from "./routes/AllRoutes";
import { Header } from "./components/Layouts/Header";
import { Footer } from "./components/Layouts/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";

function App() {

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
