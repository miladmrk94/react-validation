import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignUpComponent from "./components/SignUpComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <SignUpComponent />
      </section>
      <Footer />
    </div>
  );
}

export default App;
