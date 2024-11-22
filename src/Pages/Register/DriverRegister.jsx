


const items = [
  {
    label: "Driving License - Front",
    status: "Recommended next step",
    statusClass: "text-blue-500",
  },
  { label: "Profile photo" },
  { label: "Aadhaar Card" },
  { label: "PAN Card" },
  { label: "Registration Certificate (RC)" },
  { label: "Vehicle Insurance" },
  { label: "Vehicle Permit" },
  {
    label: "Preferred Language",
    status: "Completed",
    statusClass: "text-green-500",
  },
];

const DriverRegister = () => {
  return (
    <div className="max-w-md mx-auto my-20 p-6 bg-white shadow-md rounded-md">
      
      <h1 className="text-2xl font-bold text-gray-900">Welcome, Athul</h1>
      <p className="text-gray-600 mt-2">
        Here's what you need to do to set up your account.
      </p>
      <div className="mt-6 space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b pb-3 last:border-b-0"
          >
            <div>
              <p className="text-gray-900 font-medium">{item.label}</p>
              {item.status && (
                <p className={`text-sm ${item.statusClass}`}>{item.status}</p>
              )}
            </div>
            <div>
              <span className="text-gray-400 text-xl">&gt;</span>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default DriverRegister;
