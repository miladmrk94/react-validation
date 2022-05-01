import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignUpComponent from "./components/SignUpComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <img
          className="img"
          alt="lang"
          src={require("../src/assets/LouiseHasWeapon1.png")}
        />
        <img
          className="img2"
          alt="lang"
          src={require("../src/assets/OfferWeapon1.png")}
        />
        <img
          className="img3"
          alt="lang"
          src={require("../src/assets/LouiseHasWeapon1.png")}
        />
        <SignUpComponent />
      </section>
      <Footer />
    </div>
  );
}

export default App;
