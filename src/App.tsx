import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Collage from "./components/Collage";

function App() {
  const [displayPhotos, setDisplayPhotos] = useState(false);

  return (
    <div className="vh-25 d-flex flex-column bg-danger-subtle">
      <main className="flex-grow-1 d-flex align-items-center justify-content-center p-3">
        <Card />
      </main>

      <footer className="text-center py-1">
        <button
          className="btn btn-danger btn-lg px-5"
          onClick={() => setDisplayPhotos(true)}
        >
          Photos :3
        </button>
      </footer>

      {displayPhotos && (
        <div className="position-fixed top-0 start-0 w-100 h-100 overflow-auto bg-danger-subtle">
          <button
            className="btn-close position-fixed top-0 end-0 m-3"
            aria-label="Close photos"
            onClick={() => setDisplayPhotos(false)}
          />
          <Collage />
        </div>
      )}
    </div>
  );
}

export default App;
