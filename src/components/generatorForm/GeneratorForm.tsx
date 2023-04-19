import { FiDownload } from "react-icons/fi";
import styles from "./styles.module.scss";

type QrCodeDetails = {
  url: string;
  size: number;
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  handleDownloadQRCode: (e: React.FormEvent) => void;
};

const GeneratorForm = ({ url, setUrl, setSize, handleDownloadQRCode }: QrCodeDetails) => {
  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={handleDownloadQRCode}>
        <input
          type="text"
          name="form"
          id="form"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter Your Website URL"
        />
        <p> Your QR code will be generated automatically. </p>
      </form>

      {/* FOR DYNAMIC SIZE IMPLEMENTATION */}

      {/*       <select
        name="select_size"
        className={styles.select}
        onChange={(e) => setSize(parseInt(e.target.value))}
      >
        <option value="128"> Small (128x128)</option>
        <option value="256"> Medium (256x256)</option>
        <option value="325"> Large (325x325)</option>
      </select> */}

      <button type="submit" className={styles.btn_form} onClick={handleDownloadQRCode}>
        Download <FiDownload />
      </button>
    </div>
  );
};

export default GeneratorForm;
