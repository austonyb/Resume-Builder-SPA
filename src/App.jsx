import { useState } from "react";
import "./App.css";
import CustomForm from "./components/CustomForm";

function App() {
  const [formData, setFormData] = useState();

  //handle form data
  const handleFormSubmit = (data) => {
    setFormData(data);
  };
  return (
    <>
      <h1 className="text-3xl">Resume</h1>
      <br />

      <div className="flex flex-row">
      <CustomForm onSubmit={handleFormSubmit} />
      <div className="border-l border-gray-300 h-50 mx-4"></div>
      </div>
    </>
  );
}

export default App;
