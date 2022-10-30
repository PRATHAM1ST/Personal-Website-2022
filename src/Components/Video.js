export default function Video({ src, index }) {
  return (
    <>
      <div className="image-container">
        <video className="admin-video" src={src} alt="n" autoPlay loop muted />
        <input type="file" accept="video/*" />
      </div>
    </>
  );
}
