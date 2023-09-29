export default function ResumeRender({ formData }) {
  return (
    <div className="rounded-lg border border-gray-300 p-4 text-left">
      {!formData ? (
        <div>
          <h1 className="text-2xl font-semibold">Please Fill out the form</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold">{formData.name}</h1>
          <br />
          <h2 className="text-lg">{formData.email}</h2>
          <h2 className="text-lg">{formData.phone}</h2>
          <br />
          <h2 className="text-xl font-semibold">Education</h2>
          <p>{formData.school}</p>
          <p>{formData.levels}</p>
          <p className="italic">Studied {formData.degree}</p>
          <p className="italic">Graduation Date: {formData.graduationDate}</p>
          {Array.isArray(formData.experiences) &&
          formData.experiences.length > 0 ? (
            <>
              <h2 className="text-xl font-semibold">Experience</h2>
              {formData.experiences.map((experience, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-4 mb-4"
                >
                  <h3 className="text-lg">
                  {experience.startDate || "Start Date"} through {experience.endDate || "End Date"}
                  </h3>
                  <p className="text-base">Company: {experience.company}</p>
                  <p className="text-base">Position: {experience.position}</p>
                  <p className="text-base">
                    Experience: {experience.experience}
                  </p>
                </div>
              ))}
            </>
          ) : (
            <p className="text-base">No experience data available.</p>
          )}
        </div>
      )}
    </div>
  );
}
