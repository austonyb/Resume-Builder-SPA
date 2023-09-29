function ExperienceForm({ jobKey }) {
    const company  = `company${jobKey}`
    const position = `position${jobKey}`
    const experience = `experience${jobKey}`
    return (
      <div className="border-2 border-gray-400 rounded-lg p-4">
        <label className="block">
          Company: <input name={company} className="border rounded p-1" />
        </label>
        <hr className="my-2" />
        <label className="block">
          Position Title: <input name={position} className="border rounded p-1" />
        </label>
        <hr className="my-2" />
        <label className="block">
          Experience: <textarea name={experience} cols="30" rows="10" className="border rounded p-1"></textarea>
        </label>
      </div>
    );
  }
  
  export default ExperienceForm;
  