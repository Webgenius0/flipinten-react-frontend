import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "react-router-dom";
import Router from "@/router/Router.jsx";
import { Toaster } from "react-hot-toast"; // For toast notifications

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
    <Toaster />
  </StrictMode>
);
