import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";
import App from "./App.tsx";
// import Capture from "./routes/Capture.tsx";
// import Frame from "./routes/Frame.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/capture",
//         element: <Capture />
//       },
//       {
//         path: "/frame",
//         element: <Frame />
//       }
//     ]
//   },
// ]);

const container = document.getElementById("root")
const root = createRoot(container!);

root.render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </StrictMode>,
);
