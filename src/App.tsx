import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Collage from "./components/Collage";

function App() {
  const [displayPhotos, setDisplayPhotos] = useState(false);

  return (
    <>
      <div className="container-fluid d-flex flex-column justify-items-center align-items-center" style={{border: "solid red"}}>
        <div className="d-flex mt-5 p-2 justify-content-center align-items-center">
          <Card />
        </div>
        <button
          className="btn btn-primary btn-lg w-50"
          onClick={() => setDisplayPhotos(!displayPhotos)}
        >
          Photos :3
        </button>
      <div className={displayPhotos ? "position-absolute w-100" : "hidden"}>
        <Collage />
      </div>
      </div>
    </>
  );
}

export default App;
