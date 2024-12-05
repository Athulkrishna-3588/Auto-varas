import { useState } from "react";
import { Link } from "react-router-dom";


function DriverRegister() {
  const [formData, setFormData] = useState({
    drivingLicense: "",
    aadhaarCard: "",
    panCard: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to an API or validate)
    console.log("Form Data:", formData);
  };

  return (
    <div className="max-w-md mx-auto my-20 p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-gray-900">Welcome, Athul</h1>
      <p className="text-gray-600 mt-2">
        Here's what you need to do to set up your account.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        {/* Driving License */}
        <div className="flex flex-col">
          <label htmlFor="drivingLicense" className="text-gray-900 font-medium">
            Driving License
          </label>
          <input
            type="text"
            id="drivingLicense"
            name="drivingLicense"
            value={formData.drivingLicense}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
            placeholder="Enter your Driving License number"
          />
        </div>

        {/* Aadhaar Card */}
        <div className="flex flex-col">
          <label htmlFor="aadhaarCard" className="text-gray-900 font-medium">
            Aadhaar Card
          </label>
          <input
            type="text"
            id="aadhaarCard"
            name="aadhaarCard"
            value={formData.aadhaarCard}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
            placeholder="Enter your Aadhaar Card number"
          />
        </div>

        {/* PAN Card */}
        <div className="flex flex-col">
          <label htmlFor="panCard" className="text-gray-900 font-medium">
            PAN Card
          </label>
          <input
            type="text"
            id="panCard"
            name="panCard"
            value={formData.panCard}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200"
            placeholder="Enter your PAN Card number"
          />
        </div>

        <Link Link to={"/to-dashboard"}>
        <button
          type="submit"
          className="w-full bg-black text-white mt-4 py-2 px-4 rounded-md hover:bg-yellow-400 hover:text-black transition"
        >
          Submit
        </button>
        </Link>

      </form>
    </div>
  );
}

export default DriverRegister;

