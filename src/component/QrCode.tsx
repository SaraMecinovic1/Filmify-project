import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";

const QRCodeGenerator = ({ reservationId }: { reservationId: string }) => {
  const navigate = useNavigate();
  const qrData = `http://localhost:5173/your-qr/${reservationId}`;

  return (
    <div className="flex justify-center text-center items-center flex-col">
      <h2 className="text-2xl font-semibold mb-4 text-secondary">
        QR CODE FOR YOUR RESERVATION 📲
      </h2>
      <QRCode
        onClick={() => navigate(`/your-qr/${reservationId}`)}
        value={qrData}
        size={200}
        fgColor="#000000"
      />

      <h1 className="font-medium text-lg text-textColor mt-4">
        Thank you for choosing us,{" "}
        <span className="text-secondary font-medium">FILMIFY</span> !
      </h1>
    </div>
  );
};

export default QRCodeGenerator;
