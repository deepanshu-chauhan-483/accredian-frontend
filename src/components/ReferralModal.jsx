import { useState } from "react";
import axios from "axios";

export default function ReferralModal({ onClose }) {
  const [formData, setFormData] = useState({ name: "", email: "", refereeEmail: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.refereeEmail) {
      setError("All fields are required");
      return;
    }
    try {
      await axios.post("https://accredian-backend-dvof.onrender.com/api/referral", formData);
      alert("Referral submitted successfully!");
      onClose();
    } catch (err) {
      setError("Error submitting referral");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 border rounded-xl w-96 mt-[100px] shadow-2xl relative">
        <h2 className="text-xl font-bold mb-4 text-gray-900">Refer a Friend</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            className="w-full p-3 rounded-lg shadow-lg focus:shadow-xl transition-all duration-200 outline-none"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
          />
          <input
            className="w-full p-3 rounded-lg shadow-lg focus:shadow-xl transition-all duration-200 outline-none"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
          />
          <input
            className="w-full p-3 rounded-lg shadow-lg focus:shadow-xl transition-all duration-200 outline-none"
            name="refereeEmail"
            placeholder="Friend's Email"
            onChange={handleChange}
          />
          <button className="bg-blue-500 text-white px-4 py-3 border rounded-xl w-full hover:bg-blue-700 transition-all duration-200">
            Submit
          </button>
        </form>
        <button className="mt-4 text-gray-600 hover:text-gray-900 font-semibold" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
