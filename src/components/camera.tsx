import { useRef, useEffect, useState } from "react";

const Camera = () => {
  const [flip, setFlip] = useState<boolean>(false);
  const [cameraOn, setCameraOn] = useState<boolean>(true);
  const [photos, setPhotos] = useState<string[]>([]);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.log("Camera error:", error);
    }
  };

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach(track => track.stop());
    streamRef.current = null;
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  const toggleCamera = () => {
    if (cameraOn) stopCamera();
    else startCamera();
    setCameraOn(prev => !prev);
  };

  const takeSnapshot = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.save(); // Save context state

    if (flip) {
      context.translate(canvas.width, 0);
      context.scale(-1, 1);
    }

    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    context.restore(); // Restore context after flipping

    const imageData = canvas.toDataURL("image/png");
    setPhotos(prevPhotos => [...prevPhotos, imageData]);
  };

  return (
    <div className="space-y-4">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        width="100%"
        className={`w-full ${flip ? "scale-x-[-1]" : ""}`}
      />

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setFlip(prev => !prev)}
          className="rounded bg-amber-300 px-4 py-2"
        >
          Flip Camera
        </button>
        <button
          onClick={toggleCamera}
          className={`rounded px-4 py-2 ${
            cameraOn ? "bg-red-500" : "bg-green-500"
          } text-white`}
        >
          {cameraOn ? "Turn Off Camera" : "Turn On Camera"}
        </button>
        <button
          onClick={takeSnapshot}
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Capture Photo
        </button>
      </div>

      <canvas ref={canvasRef} className="hidden" />

      {photos.length > 0 && (
        <div className="mt-6">
          <h2 className="mb-2 text-lg font-semibold">Gallery:</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`Snapshot ${index + 1}`}
                className="w-full rounded shadow"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Camera;
