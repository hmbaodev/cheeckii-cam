import Frame from "./routes/Frame";

const App = () => {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center gap-8 bg-gray-100">
      {/* <div className="flex items-center gap-2">
        <Link
          to="/capture"
          className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Capture
        </Link>
        <Link
          to="/frame"
          className="rounded-md bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
        >
          Frame
        </Link>
      </div>
      <Outlet /> */}
      <Frame bgImg="/frame-1.png"/>
      <Frame bgImg="/frame-2.png"/>
    </div>
  );
};

export default App;
