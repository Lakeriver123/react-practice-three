import { useState } from 'react';

function Education({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <h2>Edit Education</h2>
      <form onSubmit={handleSubmit}>
        <label>
          School:
          <input type="text" name="school" value={formData.school} onChange={handleChange} />
        </label>
        <label>
          Title of Study:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>
          Date:
          <input type="text" name="date" value={formData.date} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default Education;
