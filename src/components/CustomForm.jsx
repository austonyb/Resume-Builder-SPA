import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

export default function CustomForm({ onSubmit }) {
  const [experienceForms, setExperienceForms] = useState([]);
  const [formData, setFormData] = useState({});

  const reset = () => {
    setExperienceForms([]);
    setFormData({}); // Clear formData
  };

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Convert form data to JSON
    const formJson = Object.fromEntries(formData.entries());

    // Add experiences to the formJson object
    formJson.experiences = experienceForms;

    console.log(formJson);

    onSubmit(formJson);
    setFormData(formJson); // Update formData state
  }

  const addExperience = (experience) => {
    setExperienceForms([...experienceForms, experience]);
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Name: <input name="name" />
      </label>
      <hr />
      <label>
        Email: <input name="email" />
      </label>
      <hr />
      <label>
        Phone: <input name="phone" type="tel" />
      </label>
      <hr />
      <label>
        School: <input name="school" />
      </label>
      <hr />
      <label>
        Level of Education:{" "}
        <select name="levels" id="levels">
          <option value="No Degree">No Degree</option>
          <option value="Associates">Associates</option>
          <option value="Bachelors">Bachelors</option>
          <option value="Masters">Masters</option>
          <option value="PHD">PHD</option>
        </select>
      </label>
      <hr />
      <label>
        Area of Study:{" "}
        <select name="degree" id="degree">
          <option value="CS">CS</option>
          <option value="Communications">Communications</option>
          <option value="Econ">Econ</option>
          <option value="Marketing">Marketing/Business</option>
        </select>
      </label>
      <hr />
      <label>
        Graduation Date: <input name="graduationDate" type="date" />
      </label>
      <hr />

      {experienceForms.map((experience, index) => (
        <div key={index}>
          <ExperienceForm
            experience={experience}
            onChange={(updatedExperience) => {
              const updatedExperiences = [...experienceForms];
              updatedExperiences[index] = updatedExperience;
              setExperienceForms(updatedExperiences);
            }}
          />
          <hr />
        </div>
      ))}

      <br />
      <button
        onClick={() =>
          addExperience({ company: "", position: "", experience: "" })
        }
        className="border-2 border-gray-400 rounded-lg p-1"
      >
        Add Experience
      </button>
      <br />
      <div className="p-2">
        {/* <button
          type="reset"
          onClick={reset}
          className="bg-gray-800 text-white rounded-lg px-4 py-2 hover:bg-gray-600"
        >
          Reset form
        </button> */}
        <button
          type="submit"
          className="bg-gray-800 text-white rounded-lg px-4 py-2 hover:bg-gray-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
