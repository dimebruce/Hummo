import { useState } from "react";
import hummo from "../public/flame.svg";
import { formatoMoneda } from "./helpers";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [calculo, setCalculo] = useState(0);

  const handleComision = (e) => {
    e.preventDefault();
    const porcentaje = Number(0.0406);
    const temp = count * porcentaje;
    setCalculo(Number(count + temp));

    setCount(0)
  };
  

  return (
    <>
        <div className="App">
          <div>
            <a href="https://reactjs.org" target="_blank">
              <img src={hummo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h2 className="text-white mb-5">
            <span style={{ color: " #FF6600" }}>Hummo</span> Morelia
          </h2>
          <form onSubmit={handleComision}>
            <div className="mb-3">
              <label className="form-label text-white">Total de la cuenta</label>
              <input
                type="tel"
                value={count ? count : ""}
                className="form-control fs-3 fw-bold text-center"
                placeholder="0.00"
                onChange={(e) => setCount(Number(e.target.value))}
              />
              <div className="form-text">
                Es el total de la cuenta sin impuestos
              </div>
            </div>
            <button
              type="submit"
              className="btn w-100 text-black fw-bold"
              style={{ background: " #FF6600" }}
            >
              Calcular
            </button>
          </form>
          {calculo ? (
            <h2 className="text-white mt-5">
              Lo que debes cobrar es{" "}
              <span
                className="fs-1 text-bold fw-bold"
                style={{ color: " #FF6600" }}
              >
                {formatoMoneda(calculo)}
              </span>
            </h2>
          ) : null}
        </div>
        <Footer/>
    </>
  );
}

export default App;
