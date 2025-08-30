import React, { useState } from "react";
import "../styles/form.css";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const totalSteps = 4;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Final Data:", formData);
    alert("Form submitted! Redirecting to dashboard...");
    navigate("/Dashboard.jsx");
  };

  // progress percentage
  const progress = (step / totalSteps) * 100;

  return (
    <div className="form-container">
      <div className="form-card">
        <h2>Signup Wizard</h2>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="form-step">
            <h3>Basic Information</h3>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="bloodGroup"
              placeholder="Blood Group"
              onChange={handleChange}
              required
            />
            <div className="buttons">
              <button disabled={!formData.name || !formData.age || !formData.bloodGroup} onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Emergency Contacts */}
        {step === 2 && (
          <div className="form-step">
            <h3>Emergency Contacts</h3>
            <input
              type="text"
              name="contactName"
              placeholder="Contact Name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="relation"
              placeholder="Relation"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
            <div className="buttons">
              <button onClick={prevStep}>Previous</button>
              <button disabled={!formData.contactName || !formData.relation || !formData.phone} onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Medical History */}
        {step === 3 && (
          <div className="form-step">
            <h3>Medical History</h3>
            <input
              type="text"
              name="allergies"
              placeholder="Allergies"
              onChange={handleChange}
            />
            <input
              type="text"
              name="medications"
              placeholder="Current Medications"
              onChange={handleChange}
            />
            <input
              type="text"
              name="conditions"
              placeholder="Existing Conditions"
              onChange={handleChange}
            />
            <div className="buttons">
              <button onClick={prevStep}>Previous</button>
              <button onClick={nextStep}>Next</button>
            </div>
          </div>
        )}

        {/* Step 4: Insurance */}
        {step === 4 && (
          <div className="form-step">
            <h3>Insurance Details</h3>
            <input
              type="text"
              name="policyNumber"
              placeholder="Policy Number"
              onChange={handleChange}
            />
            <input
              type="text"
              name="insuranceCompany"
              placeholder="Insurance Company"
              onChange={handleChange}
            />
            <input
              type="text"
              name="policyDetails"
              placeholder="Policy Details"
              onChange={handleChange}
            />
            <input
              type="text"
              name="preferredHospital"
              placeholder="Preferred Hospital"
              onChange={handleChange}
            />
            <input
              type="text"
              name="agentHelpline"
              placeholder="Agent / Helpline"
              onChange={handleChange}
            />
            <div className="buttons">
              <button onClick={prevStep}>Previous</button>
              <button onClick={handleSubmit}>Finish & Generate Dashboard</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
