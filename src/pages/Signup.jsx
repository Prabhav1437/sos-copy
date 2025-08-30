import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    contact: "",
    medical: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Details saved! ✅");
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="form">
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input name="contact" placeholder="Emergency Contact" value={formData.contact} onChange={handleChange} required />
        <textarea name="medical" placeholder="Medical History" value={formData.medical} onChange={handleChange} required />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
