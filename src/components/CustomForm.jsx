import { useState } from "react";
import ExperienceForm from "./ExperienceForm";

export default function CustomForm({ onSubmit }) {
  const [experienceForms, setExperienceForms] = useState([]);

  const reset = () => {
    setExperienceForms([]);
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
  }

  const addExperience = (experience) => {
    setExperienceForms([...experienceForms, experience]);
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Name: <input name="name" defaultValue="First and Last Name" />
      </label>
      <hr />
      <label>
        Email: <input name="email" defaultValue="hello@example.com" />
      </label>
      <hr />
      <label>
        Phone: <input name="phone" type="tel" defaultValue="801-867-5309" />
      </label>
      <hr />
      <label>
        School:{" "}
        <input
          name="school"
          defaultValue="Enter the name of where you went to school"
        />
      </label>
      <hr />
      <label>
        Level of Education:{" "}
        <select name="levels" id="levels">
          <option value="noDegree">No Degree</option>
          <option value="associates">Associates</option>
          <option value="bachelors">Bachelors</option>
          <option value="masters">Masters</option>
          <option value="phd">PHD</option>
        </select>
      </label>
      <label>
        Area of Study:{" "}
        <select name="degrees" id="degrees">
          <option value="cs">CS</option>
          <option value="communications">Communications</option>
          <option value="econ">Econ</option>
          <option value="marketing">Marketing/Business</option>
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
        onClick={() => addExperience({ company: '', position: '', experience: '' })}
        className="border-2 border-gray-400 rounded-lg p-1"
      >
        Add Experience
      </button>
      <br />
      <div className="p-2">
        <button
          type="reset"
          onClick={reset}
          className="bg-gray-800 text-white rounded-lg px-4 py-2 hover:bg-gray-600"
        >
          Reset form
        </button>
        <button
          type="submit"
          className="bg-gray-800 text-white rounded-lg px-4 py-2 hover:bg-gray-600"
        >
          Submit form
        </button>
      </div>
    </form>
  );
}
