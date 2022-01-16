import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "SlateBlue";
      showAlert("DARK MODE HAS BEEN ENABLED", "SUCCESS");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("LIGHT MODE HAS BEEN ENABLED", "SUCCESS");
    }
  };
  const togglegreen = () => {
    if (
      document.body.style.backgroundColor === "#003333" ||
      document.body.style.backgroundColor === "#33001a" ||
      document.body.style.backgroundColor === "#000033"
    ) {
      setmode("light");
    } else {
      document.body.style.backgroundColor = "#003333";
    }
  };
  const togglered = () => {
    if (mode === "light" || mode === "dark") {
      document.body.style.backgroundColor = "#33001a";
    }
  };
  const toggleblue = () => {
    if (mode === "light" || mode === "dark") {
      document.body.style.backgroundColor = "#000033";
    }
  };

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  return (
    <>
      <Navbar
        mode={mode}
        togglemode={togglemode}
        togglered={togglered}
        toggleblue={toggleblue}
        togglegreen={togglegreen}
      />
      <Alert alert={alert}></Alert>
      <container>
        <TextForm mode={mode} showAlert={showAlert} />
      </container>
    </>
  );
}

export default App;
