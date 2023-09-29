function ExperienceForm({ experience, onChange }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange({ ...experience, [name]: value });
      };

    return (
        <div className="border-2 border-gray-400 rounded-lg p-4">
        <label className="block">
          Company: <input name="company" value={experience.company} onChange={handleChange} className="border rounded p-1" />
        </label>
        <hr className="my-2" />
        <label className="block">
          Position Title: <input name="position" value={experience.position} onChange={handleChange} className="border rounded p-1" />
        </label>
        <hr className="my-2" />
        <label className="block">
          Experience: <textarea name="experience" value={experience.experience} onChange={handleChange} cols="30" rows="10" className="border rounded p-1"></textarea>
        </label>
      </div>
    );
  }
  
  export default ExperienceForm;
  