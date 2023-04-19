import { QRCodeCanvas } from "qrcode.react";
import styles from "./styles.module.scss";

type QrCodeDetails = {
  url: string;
  size: number;
  canvasRef: React.MutableRefObject<null>;
};

const QrCode = ({ url, size, canvasRef }: QrCodeDetails) => {
  const qrCode = (
    <QRCodeCanvas
      id="canvasId"
      value={url}
      size={size}
      bgColor={"#ffffff"}
      fgColor={"#000000"}
      level={"L"}
      includeMargin={false}
    />
  );

  return (
    <div ref={canvasRef} className={styles.main}>
      <div className={styles.container}>{qrCode}</div>
    </div>
  );
};

export default QrCode;
