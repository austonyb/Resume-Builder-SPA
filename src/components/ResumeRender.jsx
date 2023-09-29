export default function ResumeRender({ formData }) {
    return (
      <>
        {!formData ? (
          <div>
            <h1>Please Fill out the form</h1>
          </div>
        ) : (
          <div>
            <h1>{formData.name}</h1>
            <br />
            <h2>{formData.email}</h2>
            <h2>{formData.phone}</h2>
            <br />
            <h2>Education</h2>
            <p>{formData.school}</p>
            <p>{formData.levels}</p>
            <p>Studied {formData.degrees}</p>
            <p>Graduation Date: {formData.graduationDate}</p>
            {Array.isArray(formData.experiences) && formData.experiences.length > 0 ? (
              <>
                <h2>Experience</h2>
                {formData.experiences.map((experience, index) => (
                  <div key={index}>
                    <h3>Experience {index + 1}</h3>
                    <p>Company: {experience.company}</p>
                    <p>Position: {experience.position}</p>
                    <p>Experience: {experience.experience}</p>
                  </div>
                ))}
              </>
            ) : (
              <p>No experience data available.</p>
            )}
          </div>
        )}
      </>
    );
  }
  