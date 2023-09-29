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
      <h1>Resume</h1>
      <br />
      <CustomForm onSubmit={handleFormSubmit} />

      {formData && (
        <div>
          <h2>Submitted Data</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </>
  );
}

export default App;
