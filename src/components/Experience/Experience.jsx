import { useState } from 'react';

function Experience({ initialData, onSubmit, onCancel }) {
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
      <h2>Edit Experience</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Company:
          <input type="text" name="company" value={formData.company} onChange={handleChange} />
        </label>
        <label>
          Position:
          <input type="text" name="position" value={formData.position} onChange={handleChange} />
        </label>
        <label>
          Responsibilities:
          <textarea name="responsibilities" value={formData.responsibilities} onChange={handleChange} />
        </label>
        <label>
          From Date:
          <input type="text" name="fromDate" value={formData.fromDate} onChange={handleChange} />
        </label>
        <label>
          To Date:
          <input type="text" name="toDate" value={formData.toDate} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default Experience;
