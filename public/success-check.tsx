export default function SuccessCheck() {
  return (
    <video autoPlay preload="none" className="rounded-full">
      <source src="/success.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  );
}
