import { useRef, useState } from "react";
import GeneratorForm from "./components/generatorForm/GeneratorForm";
import QrCode from "./components/qr-code/QrCode";
import "./App.css";

function App() {
  const [url, setUrl] = useState<string>("");
  const [size, setSize] = useState<number>(280);
  const canvasRef = useRef(null);

  const handleDownloadQRCode = (e: React.FormEvent) => {
    e.preventDefault();

    // @ts-ignore
    let canvas = canvasRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let link = document.createElement("a");
    link.href = image;
    link.download = "your-qr-code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setUrl("");
  };

  return (
    <div className="App">
      <h1> Create Your QR-code </h1>
      <div className="main">
        <QrCode url={url} size={size} canvasRef={canvasRef} />
        <GeneratorForm
          url={url}
          setUrl={setUrl}
          size={size}
          setSize={setSize}
          handleDownloadQRCode={handleDownloadQRCode}
        />
      </div>
    </div>
  );
}

export default App;
