import Routes from "./router/Routes";
import "./sass/app.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import shopApi from "./api/shopApi";
import {useState,  useEffect } from "react";

function App() {
  const [data, setdata] = useState([])
  useEffect(() => {
    async function getData(type, params) {
      const response = await shopApi.getAll(type , {params});
      console.log(response);
      return response;
    }
    getData().then((response) => {
      setdata(response)
    })
    getData().catch((error) => {
      console.error(error);
    })
  }, []);
  console.log(data);

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
