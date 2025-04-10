import Camera from "./components/camera"

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-200">
      <p>Camera App</p>
      <Camera />
    </div>
  )
}

export default App