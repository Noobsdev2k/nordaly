import Routes from "./router/Routes";
import "./sass/app.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="main-wrapper">
        <Header />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
