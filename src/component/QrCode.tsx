import QRCode from "react-qr-code";

const QRCodeGenerator = ({ reservationId }: { reservationId: string }) => {
  const qrData = `http://localhost:5173/your-qr/${reservationId}`; // Za lokalni razvoj

  return (
    <div className="flex justify-center text-center items-center flex-col">
      <h2 className="text-3xl font-semibold mb-4 text-secondary">
        QR CODE FOR YOUR RESERVATION 📲
      </h2>
      <QRCode
        value={qrData} // Podaci koje QR kod treba da sadrži
        size={200}
        fgColor="#000000" // Boja QR koda
      />

      <h1 className="font-medium text-lg text-textColor mt-4">
        Thank you for choosing us,{" "}
        <span className="text-secondary font-medium">Filmify</span>!
      </h1>
    </div>
  );
};

export default QRCodeGenerator;
