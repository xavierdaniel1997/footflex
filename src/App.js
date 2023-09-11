import Footer from "./components/Footer";
import LoginSignin from "./components/LoginSignin";
import NavBar from "./components/NavBar";
import OTPVerification from "./components/OTPVerification";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <LoginSignin /> */}
      {/* <OTPVerification /> */}
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
