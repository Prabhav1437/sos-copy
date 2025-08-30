import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";

function Dashboard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("sosProfile");
    if (data) setProfile(JSON.parse(data));
  }, []);

  if (!profile) {
    return <p>No data found. Please create your profile first.</p>;
  }

  return (
    <div className="dashboard">
      <h2>Emergency Profile Dashboard</h2>
      
      {/* Personal Info */}
      <div className="card">
        <h3>Personal Information</h3>
        {profile.photo && <img src={profile.photo} alt="Profile" className="profile-pic" />}
        <p><strong>Name:</strong> {profile.fullName}</p>
        <p><strong>Address:</strong> {profile.address}</p>
        <p><strong>Height:</strong> {profile.height} cm</p>
        <p><strong>Weight:</strong> {profile.weight} kg</p>
      </div>

      {/* Emergency Contact */}
      <div className="card">
        <h3>Emergency Contact</h3>
        <p><strong>Contact:</strong> {profile.emergencyName}</p>
        <p><strong>Phone:</strong> {profile.emergencyPhone}</p>
        <p><strong>Relation:</strong> {profile.emergencyRelation}</p>
      </div>

      {/* Medical Info */}
      <div className="card">
        <h3>Medical Information</h3>
        <p><strong>Blood Group:</strong> {profile.bloodGroup}</p>
        <p><strong>Allergies:</strong> {profile.allergies}</p>
        <p><strong>COVID Vaccination:</strong> {profile.covidVaccine}</p>
        <p><strong>Drug Allergies:</strong> {profile.drugAllergies}</p>
        <p><strong>Food Allergies:</strong> {profile.foodAllergies}</p>
        <p><strong>Vision:</strong> {profile.vision}</p>
        <p><strong>Blood Pressure:</strong> {profile.bloodPressure}</p>
        <p><strong>Sugar Level:</strong> {profile.sugarLevel}</p>
        <p><strong>Family Doctor:</strong> {profile.familyDoctor}</p>
        <p><strong>Doctor Contact:</strong> {profile.doctorContact}</p>
      </div>

      {/* Insurance */}
      <div className="card">
        <h3>Insurance Details</h3>
        <p><strong>Policy Number:</strong> {profile.policyNumber}</p>
        <p><strong>Company:</strong> {profile.insuranceCompany}</p>
        <p><strong>Policy Details:</strong> {profile.policyDetails}</p>
        <p><strong>Hospital:</strong> {profile.preferredHospital}</p>
        <p><strong>Helpline:</strong> {profile.agentHelpline}</p>
      </div>
    </div>
  );
}

export default Dashboard;
