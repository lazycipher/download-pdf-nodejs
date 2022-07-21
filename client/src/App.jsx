import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Receipt from "./screens/Receipt";

function App() {
  const getData = async () => {
    toast.promise(
      () => {
        return fetch("http://localhost:5000/ping").then((res) => res.json());
      },
      {
        pending: "Checking Server Availability.",
        success: "Server Available 👌",
        error: "Server Not Available 🤯",
      }
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Receipt />
      <ToastContainer />
    </div>
  );
}

export default App;
