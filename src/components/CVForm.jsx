import { useState } from 'react';
import GeneralInfo from './GeneralInfo/GeneralInfo';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import './CVForm.css';

function CVForm() {
  // State for General Information
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // State for Education Information
  const [education, setEducation] = useState({
    school: '',
    title: '',
    date: ''
  });

  // State for Experience Information
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    responsibilities: '',
    fromDate: '',
    toDate: ''
  });

  // State to control visibility of forms
  const [showGeneralInfoForm, setShowGeneralInfoForm] = useState(false);
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [showExperienceForm, setShowExperienceForm] = useState(false);

  // Handlers to toggle edit mode for each section
  const handleEditGeneralInfo = () => {
    setShowGeneralInfoForm(true);
  };

  const handleEditEducation = () => {
    setShowEducationForm(true);
  };

  const handleEditExperience = () => {
    setShowExperienceForm(true);
  };

  // Handlers to submit form data and update state
  const handleSubmitGeneralInfo = (data) => {
    setGeneralInfo(data);
    setShowGeneralInfoForm(false);
  };

  const handleSubmitEducation = (data) => {
    setEducation(data);
    setShowEducationForm(false);
  };

  const handleSubmitExperience = (data) => {
    setExperience(data);
    setShowExperienceForm(false);
  };

  return (
    <div className="cv-form">
      <h1>CV Form</h1>

      {/* General Info Section */}
      {showGeneralInfoForm ? (
        // Render GeneralInfo form component for editing
        <GeneralInfo
          initialData={generalInfo}
          onSubmit={handleSubmitGeneralInfo}
          onCancel={() => setShowGeneralInfoForm(false)}
        />
      ) : (
        // Render static General Info display
        <div>
          <h2>General Information</h2>
          <p>Name: {generalInfo.name}</p>
          <p>Email: {generalInfo.email}</p>
          <p>Phone: {generalInfo.phone}</p>
          <button onClick={handleEditGeneralInfo}>Edit</button>
        </div>
      )}

      {/* Education Section */}
      {showEducationForm ? (
        // Render Education form component for editing
        <Education
          initialData={education}
          onSubmit={handleSubmitEducation}
          onCancel={() => setShowEducationForm(false)}
        />
      ) : (
        // Render static Education display
        <div>
          <h2>Education</h2>
          <p>School: {education.school}</p>
          <p>Title of Study: {education.title}</p>
          <p>Date: {education.date}</p>
          <button onClick={handleEditEducation}>Edit</button>
        </div>
      )}

      {/* Experience Section */}
      {showExperienceForm ? (
        // Render Experience form component for editing
        <Experience
          initialData={experience}
          onSubmit={handleSubmitExperience}
          onCancel={() => setShowExperienceForm(false)}
        />
      ) : (
        // Render static Experience display
        <div>
          <h2>Experience</h2>
          <p>Company: {experience.company}</p>
          <p>Position: {experience.position}</p>
          <p>Responsibilities: {experience.responsibilities}</p>
          <p>From Date: {experience.fromDate}</p>
          <p>To Date: {experience.toDate}</p>
          <button onClick={handleEditExperience}>Edit</button>
        </div>
      )}

      {/* Submit Button */}
      <button onClick={() => console.log({ generalInfo, education, experience })}>
        Submit
      </button>
    </div>
  );
}

export default CVForm;
