export default function QRPage() {
  return (
    <div className="container">
      <h2>My QR Code</h2>
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=SOS" alt="QR Code" />
    </div>
  );
}
