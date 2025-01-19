import React from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const qrData = "";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <QRCode
        value={qrData} // Podaci koje QR kod treba da sadrži
        size={200}
        fgColor="#000000" // Boja QR koda
        bgColor="#ffffff" // Boja pozadine QR koda
      />
    </div>
  );
};

export default QRCodeGenerator;
