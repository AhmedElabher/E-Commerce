import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import ProductsList from "./components/ProductsList";
import HeaderSection from "./components/HeaderSection";
import Contact from "./components/Contact";
import About from "./components/About";
import Signup from "./components/Signup";
import ProductId from "./components/ProductDetails";
import Login from "./components/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Landing />
      <ProductsList /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <ProductsList />
              <Footer />
            </>
          }
        />
        <Route
          path="gallery"
          element={
            <>
              <HeaderSection />
              <ProductsList />
              <Footer />
            </>
          }
        />
        <Route
          path="contact"
          element={
            <>
              <HeaderSection />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <HeaderSection />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="create account"
          element={
            <>
              <HeaderSection />
              <Signup />
              <Footer />
            </>
          }
        />
        <Route
          path="product/:productId"
          element={
            <>
              <HeaderSection />
              <ProductId />
              <Footer />
            </>
          }
        />
        <Route
          path="Login"
          element={
            <>
              <HeaderSection />
              <Login />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
