import { useState } from "react";
import "./App.css";
import CustomForm from "./components/CustomForm";
import ResumeRender from "./components/ResumeRender";

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

        <ResumeRender formData={formData} />
      </div>
    </>
  );
}

export default App;
