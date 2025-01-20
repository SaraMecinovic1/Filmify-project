import QRCode from "react-qr-code";

const QRCodeGenerator = ({ reservationId }: { reservationId: string }) => {
  const qrData = `http://localhost:5173/your-qr/${reservationId}`; // Za lokalni razvoj

  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-2xl font-semibold mb-3">YOUR QR CODE 📲</h2>
      <QRCode
        value={qrData} // Podaci koje QR kod treba da sadrži
        size={200}
        fgColor="#000000" // Boja QR koda
      />
    </div>
  );
};

export default QRCodeGenerator;
